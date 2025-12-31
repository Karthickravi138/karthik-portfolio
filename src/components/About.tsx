import { motion } from "framer-motion"
import { Server, Database, BrainCircuit, Cable } from "lucide-react"

const highlights = [
    {
        icon: <Cable className="w-6 h-6" />,
        title: "Python & APIs",
        description: "Robust REST API development with Flask & Python."
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "Data Modeling",
        description: "Complex schema design with PostgreSQL for enterprise data."
    },
    {
        icon: <Server className="w-6 h-6" />,
        title: "Enterprise Systems",
        description: "CMMS logic, automated reporting, and background jobs."
    },
    {
        icon: <BrainCircuit className="w-6 h-6" />,
        title: "AI Integration",
        description: "Embedding AI assistants into operational workflows."
    },
    {
        icon: <BrainCircuit className="w-6 h-6" />,
        title: "AI Integration",
        description: "Embedding AI assistants into operational workflows."
    }
]

export function About() {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
                >

                    {/* Narrative - Left 40% */}
                    <div className="lg:w-2/5 sticky top-32">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-8 font-heading"
                        >
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div
                            className="text-lg text-muted leading-[1.8] space-y-6 font-medium"
                        >
                            <p>
                                I'm a <span className="text-foreground font-semibold">Backend / API Engineer</span> focused on building stable, maintainable systems that power real-world operations.
                            </p>
                            <p>
                                From waste management platforms to maintenance systems, my work centers on clarity—clean data models, reliable APIs, and workflows that just work.
                            </p>
                        </div>
                    </div>

                    {/* Highlights Grid - Right 60% */}
                    <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card-premium p-8 group h-full flex flex-col justify-between"
                            >
                                <div className="mb-6 text-accent p-3.5 rounded-2xl bg-accent/5 w-fit group-hover:bg-accent/10 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 font-heading text-foreground">{item.title}</h3>
                                    <p className="text-muted leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
