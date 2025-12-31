import { motion } from "framer-motion"

const technologies = [
    { category: "Languages", items: ["Go", "TypeScript", "Rust", "Python", "SQL"] },
    { category: "Infrastructure", items: ["Kubernetes", "Docker", "AWS", "Terraform", "Nginx"] },
    { category: "Databases", items: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "Elasticsearch"] },
    { category: "Tools", items: ["Git", "gRPC", "GraphQL", "Kafka", "Prometheus"] },
]

export function TechStack() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                >
                    Technical <span className="text-accent">Arsenal</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-lg font-bold border-b border-border/30 pb-2 text-foreground/80">{tech.category}</h3>
                            <ul className="space-y-2">
                                {tech.items.map((item) => (
                                    <li key={item} className="text-muted hover:text-accent transition-colors cursor-default font-mono text-sm">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
