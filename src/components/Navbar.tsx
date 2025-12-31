import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Terminal, Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-background/80 backdrop-blur-xl border-border" : "bg-background/0 border-transparent"
                }`}
        >
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo - Text Only, Heavy */}
                <a href="#" className="font-bold text-lg tracking-tight text-foreground flex items-center gap-2">
                    <span className="w-5 h-5 bg-foreground text-background flex items-center justify-center rounded-sm font-mono text-xs">/</span>
                    Karthik<span className="text-muted-foreground">R.</span>
                </a>

                {/* Desktop Nav - Minimal */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Theme Toggle - Simple Icon */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden absolute w-full"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-border">
                                <button
                                    onClick={() => {
                                        setTheme(theme === "dark" ? "light" : "dark")
                                        setIsOpen(false)
                                    }}
                                    className="flex items-center gap-2 text-muted-foreground"
                                >
                                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                    <span>Switch Theme</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
