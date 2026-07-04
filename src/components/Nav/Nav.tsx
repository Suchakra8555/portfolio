import type { Section } from '../../hooks/useActiveSection'
import styles from './Nav.module.css'

const NAV_ITEMS: { section: Section; label: string }[] = [
  { section: 'about', label: 'About' },
  { section: 'experience', label: 'Experience' },
  { section: 'projects', label: 'Projects' },
  { section: 'education', label: 'Education' },
  { section: 'achievements', label: 'Achievements' },
  { section: 'contact', label: 'Contact' },
]

interface NavProps {
  active: Section
  onSelect: (section: Section) => void
}

export function Nav({ active, onSelect }: NavProps) {
  return (
    <nav className={styles.nav} aria-label="Portfolio sections">
      {NAV_ITEMS.map(({ section, label }) => (
        <button
          key={section}
          type="button"
          className={styles.link}
          data-active={section === active}
          aria-current={section === active ? 'page' : undefined}
          onClick={() => onSelect(section)}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
