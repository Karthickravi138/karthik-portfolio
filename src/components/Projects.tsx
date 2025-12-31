import { motion } from "framer-motion"
import { FolderGit2, ArrowUpRight } from "lucide-react"

const projects = [
    {
        title: "WiseWaste Platform",
        featured: true,
        description: "Enterprise waste management platform used to track operations across multiple units.",
        work: [
            "Designed backend APIs for waste workflows",
            "Implemented unit-level data segregation",
            "Built reporting APIs for dashboards",
            "Ensured validation, error handling, and secure access"
        ],
        tech: ["Python", "Flask", "PostgreSQL"],
    },
    {
        title: "CMMS System",
        featured: false,
        description: "System to manage assets, work orders, and maintenance.",
        work: [
            "Email notification system workflow",
            "Asset monitoring APIs",
            "Background processing"
        ],
        tech: ["Python", "Flask", "PostgreSQL", "Email Services"],
    },
    {
        title: "Fogwing Copilot",
        featured: false,
        description: "AI-powered assistant integrated with CMMS.",
        work: [
            "User credential & auth APIs",
            "Integrated Copilot with CMMS",
            "Q&A over work orders"
        ],
        tech: ["Python", "APIs", "AI Integration"],
    }
]

export function Projects() {
    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                        Selected <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted text-xl max-w-2xl">
                        Engineering solutions for enterprise scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`card-premium p-8 md:p-10 flex flex-col group ${project.featured ? "lg:col-span-2 lg:flex-row lg:items-start lg:gap-12" : ""
                                }`}
                        >
                            {/* Header / Icon */}
                            <div className="flex justify-between items-start mb-6 lg:mb-0 lg:w-full max-w-[50px]">
                                <div className="p-3 rounded-xl bg-accent/5 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <FolderGit2 className="w-6 h-6" />
                                </div>
                            </div>

                            <div className={`flex flex-col ${project.featured ? "lg:w-full text-left" : ""}`}>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0" />
                                </div>

                                <p className="text-muted text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className={`mb-8 ${project.featured ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}`}>
                                    {project.featured ? (
                                        project.work.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-muted/90">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <ul className="space-y-3">
                                            {project.work.map((item, i) => (
                                                <li key={i} className="text-muted/90 flex items-start gap-3">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm font-medium rounded-md bg-muted/10 text-muted-foreground border border-black/5 dark:border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
