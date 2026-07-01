import type { Project } from '../../../data/resume.types'
import styles from './ProjectCard.module.css'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      {project.banner && (
        <img className={styles.banner} src={project.banner} alt={`${project.title} banner`} />
      )}
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{project.title}</span>
          {project.sourceType === 'led-at-company' && (
            <span className={styles.badge}>Leading @ CloudAngles</span>
          )}
        </div>
        <p className={styles.description}>{project.description}</p>
        {project.bullets && (
          <ul className={styles.bullets}>
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        {project.tags && (
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
