import { useMemo } from 'react'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import { navLinks } from './data/portfolioData'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Career from './components/sections/Career'
import Certifications from './components/sections/Certifications'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Awards from './components/sections/Awards'
import Publications from './components/sections/Publications'
import Timeline from './components/sections/Timeline'
import Teaching from './components/sections/Teaching'
import Testimonials from './components/sections/Testimonials'
import Gallery from './components/sections/Gallery'
import Contact from './components/sections/Contact'

import './App.css'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const sectionIds = useMemo(() => navLinks.map((l) => l.id), [])
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Education />
        <Career />
        <Certifications />
        <Skills />
        <Projects />
        <Awards />
        <Publications />
        <Timeline />
        <Teaching />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
