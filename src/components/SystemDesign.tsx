import { motion } from "framer-motion"

export function SystemDesign() {
    return (
        <section className="section-padding relative overflow-hidden bg-background border-y border-border/40">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 font-heading"
                >
                    System <span className="text-gradient">Architecture</span>
                </motion.h2>

                {/* Interactive Container - Hover triggers animation */}
                <motion.div
                    className="relative max-w-5xl mx-auto h-[350px] md:h-[450px] card-premium flex items-center justify-center overflow-hidden cursor-default group"
                    initial="idle"
                    whileHover="active"
                    animate="idle"
                >

                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:40px_40px]" />

                    <div className="relative z-10 flex items-center gap-6 md:gap-16 lg:gap-24">

                        {/* Client */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 rounded-2xl bg-muted/10 border border-border flex items-center justify-center font-bold text-foreground shadow-sm group-hover:bg-muted/20 transition-colors">
                                Client
                            </div>
                        </div>

                        {/* Connection 1 */}
                        <div className="w-16 md:w-24 h-0.5 bg-border relative overflow-hidden">
                            <motion.div
                                variants={{
                                    idle: { x: "-100%", opacity: 0 },
                                    active: { x: ["-100%", "100%"], opacity: 1, transition: { repeat: Infinity, duration: 1.5, ease: "linear" } }
                                }}
                                className="absolute top-0 left-0 w-1/2 h-full bg-accent"
                            />
                        </div>

                        {/* API Gateway */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-24 h-24 rounded-2xl bg-accent/5 border border-accent/20 flex items-center justify-center font-bold text-accent shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                                API
                            </div>
                            <span className="text-xs font-mono text-muted-foreground">Gateway</span>
                        </div>

                        {/* Connection 2 */}
                        <div className="w-16 md:w-24 h-0.5 bg-border relative overflow-hidden">
                            <motion.div
                                variants={{
                                    idle: { x: "-100%", opacity: 0 },
                                    active: { x: ["-100%", "100%"], opacity: 1, transition: { repeat: Infinity, duration: 1.5, delay: 0.5, ease: "linear" } }
                                }}
                                className="absolute top-0 left-0 w-1/2 h-full bg-violet-500"
                            />
                        </div>


                        {/* Worker */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-24 h-24 rounded-2xl bg-violet-500/5 border border-violet-500/20 flex items-center justify-center font-bold text-violet-500 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                                Worker
                            </div>
                            <span className="text-xs font-mono text-muted-foreground">Queue</span>
                        </div>

                        {/* Connection 3 */}
                        <div className="w-16 md:w-24 h-0.5 bg-border relative overflow-hidden">
                            <motion.div
                                variants={{
                                    idle: { x: "-100%", opacity: 0 },
                                    active: { x: ["-100%", "100%"], opacity: 1, transition: { repeat: Infinity, duration: 1.5, delay: 1, ease: "linear" } }
                                }}
                                className="absolute top-0 left-0 w-1/2 h-full bg-emerald-500"
                            />
                        </div>

                        {/* DB */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-500">
                                DB
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-6 text-sm text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                        Async Event Architecture
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
