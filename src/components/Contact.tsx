import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MessageSquareText } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="section-padding relative overflow-hidden bg-muted/5">

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="card-premium p-10 md:p-20 relative overflow-hidden"
                >
                    {/* Decorative Grid */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:32px_32px]" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center p-4 rounded-full bg-accent/10 text-accent mb-8">
                            <MessageSquareText className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading tracking-tight">Let's Build Something <br /><span className="text-gradient">Scalable</span></h2>
                        <p className="text-lg text-muted mb-10 max-w-xl mx-auto leading-relaxed">
                            I'm open to opportunities in Backend Engineering and Cloud Architecture.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="mailto:contact@karthikr.dev"
                                className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-xl shadow-foreground/5 w-full sm:w-auto justify-center"
                            >
                                <Mail className="w-5 h-5" />
                                Send an Email
                            </motion.a>
                        </div>

                        <div className="flex justify-center gap-8 border-t border-border pt-8">
                            <a href="#" className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                                <div className="p-4 rounded-full bg-muted/10 group-hover:bg-muted/20 transition-colors">
                                    <Github className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-medium">GitHub</span>
                            </a>
                            <a href="#" className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                                <div className="p-4 rounded-full bg-muted/10 group-hover:bg-muted/20 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
