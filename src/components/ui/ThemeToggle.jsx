import { FaSun, FaMoon } from 'react-icons/fa'
import './ThemeToggle.css'

export default function ThemeToggle({ theme, toggleTheme }) {
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
