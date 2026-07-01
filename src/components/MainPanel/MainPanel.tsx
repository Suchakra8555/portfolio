import type { Section } from '../../hooks/useActiveSection'
import styles from './MainPanel.module.css'
import { AboutSection } from './sections/AboutSection'
import { AchievementsSection } from './sections/AchievementsSection'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ProjectsSection } from './sections/ProjectsSection'

interface MainPanelProps {
  activeSection: Section
}

function renderSection(activeSection: Section) {
  switch (activeSection) {
    case 'about':
      return <AboutSection />
    case 'experience':
      return <ExperienceSection />
    case 'projects':
      return <ProjectsSection />
    case 'education':
      return <EducationSection />
    case 'achievements':
      return <AchievementsSection />
  }
}

export function MainPanel({ activeSection }: MainPanelProps) {
  return (
    <div className={styles.fade} key={activeSection}>
      {renderSection(activeSection)}
    </div>
  )
}
