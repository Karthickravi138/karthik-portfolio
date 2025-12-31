import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CursorGlow() {
    const [isMobile, setIsMobile] = useState(false)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring animation for the cursor follower
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        // Check if mobile (simple check)
        const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches)
        checkMobile()
        window.addEventListener("resize", checkMobile)

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 200) // Center the 400px glow
            mouseY.set(e.clientY - 200)
        }

        if (!isMobile) {
            window.addEventListener("mousemove", handleMouseMove)
        }

        return () => {
            window.removeEventListener("resize", checkMobile)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [isMobile, mouseX, mouseY])

    if (isMobile) return null

    return (
        <motion.div
            className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[5]"
            style={{
                x,
                y,
                background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, rgba(139, 92, 246, 0.03) 40%, rgba(0,0,0,0) 70%)"
            }}
        />
    )
}
