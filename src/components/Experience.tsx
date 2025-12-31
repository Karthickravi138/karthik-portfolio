import { motion } from "framer-motion"

const experience = [
    {
        company: "Factana",
        role: "Junior Python Developer",
        period: "Mar 2025 – Present",
        location: "Chennai",
        description: [
            "Built and maintained backend APIs using Python, Flask, and PostgreSQL.",
            "Worked on enterprise CMMS and waste-management platforms.",
            "Implemented email workflows, asset monitoring APIs, and AI integrations.",
            "Collaborated with frontend and product teams to deliver scalable solutions."
        ]
    }
]

export function Experience() {
    return (
        <section id="experience" className="section-padding relative overflow-hidden bg-muted/5">
            <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:pl-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl">
                        My professional journey building scalable software.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto md:mx-0">
                    {/* Gradient Line */}
                    <div className="relative border-l-2 border-l-muted/20 ml-0 md:ml-6 space-y-16 py-4">
                        {/* Gradient Overlay for Line */}
                        <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-accent via-accent/50 to-transparent" />

                        {experience.map((job, index) => (
                            <motion.div
                                key={job.company}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 md:pl-16 text-left"
                            >
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-background border-[3px] border-accent shadow-sm z-10" />

                                {/* Premium Card */}
                                <div className="card-premium p-8 group">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-1 font-heading group-hover:text-accent transition-colors">{job.role}</h3>
                                            <div className="text-lg font-medium text-muted">{job.company}</div>
                                        </div>
                                        <div className="text-left sm:text-right mt-4 sm:mt-0">
                                            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-mono font-medium">
                                                {job.period}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {job.description.map((item, i) => (
                                            <li key={i} className="text-muted/90 leading-relaxed flex items-start gap-3 text-base">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
