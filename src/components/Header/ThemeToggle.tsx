import { useTheme } from '../../context/useTheme'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
    >
      <svg className={styles.icon} role="presentation" aria-hidden="true">
        <use href={`/icons.svg#${isDark ? 'sun-icon' : 'moon-icon'}`}></use>
      </svg>
    </button>
  )
}
