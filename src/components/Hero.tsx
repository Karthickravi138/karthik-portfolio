import { motion } from "framer-motion"
import { ArrowRight, Mail, Terminal } from "lucide-react"
import { Hero3D } from "./Hero3D"
import { useTheme } from "./ThemeProvider"

export function Hero() {
    const { theme } = useTheme()
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    return (
        <section id="hero" className="min-h-[90vh] flex items-center relative overflow-hidden section-padding pt-32">
            <Hero3D />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text Content - Clean & Narrative */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-mono mb-8 border border-accent/20 backdrop-blur-sm"
                        >
                            <Terminal className="w-4 h-4" />
                            Backend / API Engineer
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
                        >
                            <span className="text-foreground">Karthik</span> <span className="text-gradient">R.</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl lg:text-3xl text-muted font-light mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            Building <span className="text-foreground font-medium">resilient backend systems</span> and <span className="text-gradient font-medium">enterprise APIs</span> that scale.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-all flex items-center gap-2 group shadow-lg shadow-foreground/5"
                            >
                                View Work
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-xl border border-border bg-card text-foreground hover:bg-muted/10 transition-colors font-medium flex items-center gap-2"
                            >
                                <Mail className="w-4 h-4" />
                                Get in Touch
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Visual - Apple Style Profile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex-1 w-full max-w-sm lg:max-w-md relative group"
                    >
                        {/* Gradient Rim */}
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-700" />

                        {/* Photo Container */}
                        <div className="relative aspect-square rounded-full overflow-hidden border border-white/10 dark:border-white/5 shadow-2xl bg-surface">
                            <img
                                src={isDark ? "/profile-dark.png" : "/profile-light.png"}
                                alt="Karthik R"
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                            />

                            {/* Subtle Inner Highlight */}
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full pointer-events-none" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
