import { Moon, Sun } from 'lucide-react'
import './ThemeToggle.css'

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className={`theme-toggle__icon ${theme === 'dark' ? 'is-active' : ''}`}>
        <Sun size={16} />
      </span>
      <span className={`theme-toggle__icon ${theme === 'light' ? 'is-active' : ''}`}>
        <Moon size={16} />
      </span>
    </button>
  )
}

export default ThemeToggle

