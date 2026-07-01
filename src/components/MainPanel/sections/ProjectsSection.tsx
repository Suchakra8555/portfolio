import { resume } from '../../../data/resume'
import { ProjectCard } from './ProjectCard'
import shared from './sectionShared.module.css'
import styles from './ProjectsSection.module.css'

export function ProjectsSection() {
  return (
    <section>
      <h2 className={shared.heading}>Projects</h2>
      <p className={shared.intro}>Things I've built and things I'm currently leading.</p>
      <div className={styles.grid}>
        {resume.projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  )
}
