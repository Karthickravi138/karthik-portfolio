import { motion } from "framer-motion"

const skills = [
    {
        category: "Backend Engineering",
        items: ["Python", "Flask", "Django", "FastAPI", "RESTful APIs", "gRPC", "Microservices"]
    },
    {
        category: "Data & Storage",
        items: ["PostgreSQL", "MongoDB", "Redis", "SQLAlchemy", "Data Modeling", "Schema Design"]
    },
    {
        category: "Infrastructure",
        items: ["AWS (EC2, S3, Lambda)", "Docker", "Git/GitHub", "CI/CD", "Nginx", "Linux"]
    },
    {
        category: "Frontend & Tools",
        items: ["React", "Typescript", "Tailwind CSS", "Postman", "VS Code"]
    },
]

export function Skills() {
    return (
        <section id="skills" className="section-padding relative bg-muted/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-muted text-xl">The stack I use to build reliable systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="card-premium p-8 hover:-translate-y-1 transition-transform duration-300"
                        >
                            <h3 className="text-lg font-bold font-heading mb-6 text-foreground tracking-tight border-b border-border pb-4">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3.5 py-1.5 text-sm font-medium rounded-lg bg-background border border-border text-muted-foreground hover:text-accent hover:border-accent/30 transition-all cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
