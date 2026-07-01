import { resume } from '../../data/resume'
import type { Section } from '../../hooks/useActiveSection'
import { Nav } from '../Nav/Nav'
import styles from './Header.module.css'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  active: Section
  onSelect: (section: Section) => void
}

export function Header({ active, onSelect }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <button
          type="button"
          className={styles.logo}
          aria-label="Go to about"
          onClick={() => onSelect('about')}
        >
          <img className={styles.logoImage} src="/logo_avatar.jpg" alt="" />
        </button>
        <span className={styles.name}>{resume.basics.name}</span>
      </div>
      <div className={styles.right}>
        <Nav active={active} onSelect={onSelect} />
        <ThemeToggle />
      </div>
    </div>
  )
}
