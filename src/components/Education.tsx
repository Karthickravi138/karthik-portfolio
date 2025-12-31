import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export function Education() {
    return (
        <section id="education" className="section-padding relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                        Education & <span className="text-gradient">Certifications</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="card-premium p-8 flex flex-col md:flex-row items-center gap-8 text-left"
                >
                    <div className="p-4 rounded-full bg-accent/5 text-accent shrink-0 border border-accent/10">
                        <GraduationCap className="w-8 h-8" />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl font-bold font-heading text-foreground">Bachelor of Engineering (CSE)</h3>
                        <p className="text-muted text-lg">Anna University, Chennai</p>
                        <p className="text-sm text-muted-foreground mt-1">2019 — 2023</p>
                    </div>

                    <div className="flex gap-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted/10 text-muted-foreground border border-border">
                            AWS Certified Cloud Practitioner
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
