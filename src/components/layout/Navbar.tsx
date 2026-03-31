import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from '../ui/ThemeToggle'
import { smoothScrollTo } from '../../utils/smoothScroll'
import { navLinks } from '../../data/portfolioData'
import './Navbar.css'

interface NavbarProps {
  theme: string
  toggleTheme: () => void
  activeSection: string
}

export default function Navbar({ theme, toggleTheme, activeSection }: NavbarProps): React.ReactElement {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string): void => {
    smoothScrollTo(id)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <button className="navbar__logo" onClick={() => handleNavClick('hero')}>
          <span className="navbar__logo-text">이애본</span>
          <span className="navbar__logo-dot" />
        </button>

        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="navbar__actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 토글"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}
