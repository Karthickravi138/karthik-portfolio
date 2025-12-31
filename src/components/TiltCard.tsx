import { useRef, MouseEvent, ReactNode } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

interface TiltCardProps {
    children: ReactNode;
    className?: string;
}

const ROTATION_RANGE = 15; // Degrees
const HALF_ROTATION_RANGE = 15 / 2;

export function TiltCard({ children, className = "" }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE / width - HALF_ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE / height - HALF_ROTATION_RANGE;

        // Invert X for proper tilt feel, Y is standard
        // rotateY is affected by X position, rotateX by Y position
        const rY = mouseX;
        const rX = -mouseY;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className={`relative ${className}`}
        >
            {/* Gloss Effect */}
            <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            />
            {children}
        </motion.div>
    );
}
