import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import './ThemeToggle.css'

interface ThemeToggleProps {
  theme: string
  toggleTheme: () => void
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps): React.ReactElement {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
      title={theme === 'light' ? '다크 모드' : '라이트 모드'}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  )
}
