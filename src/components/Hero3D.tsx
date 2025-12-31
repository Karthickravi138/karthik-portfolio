import { Canvas } from "@react-three/fiber"
import { OrbitControls, Icosahedron, Float } from "@react-three/drei"
import { useTheme } from "./ThemeProvider"

function NetworkNode() {
    const { theme } = useTheme()
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    // Premium accent color (Cyan in dark, Indigo in light)
    const color = isDark ? "#22D3EE" : "#4F46E5"

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Icosahedron args={[1, 0]} scale={2.8}>
                <meshStandardMaterial
                    color={color}
                    wireframe
                    transparent
                    opacity={0.15} // Very subtle
                    roughness={0}
                    metalness={0.5}
                />
            </Icosahedron>
            {/* Inner Core */}
            <Icosahedron args={[0.5, 2]} scale={0.5}>
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={2}
                    transparent
                    opacity={0.5}
                />
            </Icosahedron>
        </Float>
    )
}

export function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <NetworkNode />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}
