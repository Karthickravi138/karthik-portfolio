import { ThemeProvider } from "./components/ThemeProvider"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { SystemDesign } from "./components/SystemDesign" // New
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Education } from "./components/Education"
import { Contact } from "./components/Contact"
import { CursorGlow } from "./components/CursorGlow" // New
import { useEffect } from "react"
// @ts-ignore
import Lenis from "lenis"

function App() {
  useEffect(() => {
    // Premium Tuned Scroll (Snappy, not floaty)
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      // direction: 'vertical', // Default
      // gestureDirection: 'vertical', // Default
      smoothWheel: true,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-500 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <CursorGlow />
        <Navbar />
        <main className="flex-grow">
          {/* Hero - Default Cyan */}
          <Hero />

          <div className="section-split theme-violet">
            <About />
          </div>

          <div className="section-split theme-emerald">
            <SystemDesign />
          </div>

          <div className="section-split theme-amber">
            <Experience />
          </div>

          <div className="section-split theme-rose">
            <Projects />
          </div>

          <div className="section-split theme-violet">
            <Skills />
          </div>

          <div className="section-split theme-emerald">
            <Education />
          </div>

          <div className="section-split theme-amber">
            <Contact />
          </div>
        </main>
        <footer className="py-8 text-center text-sm text-muted/60 font-mono border-t border-white/5 bg-black/20 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} Karthik R. Built with React, Three.js & Tailwind.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
