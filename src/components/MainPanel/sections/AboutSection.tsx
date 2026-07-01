import { resume } from '../../../data/resume'
import styles from './AboutSection.module.css'
import shared from './sectionShared.module.css'

export function AboutSection() {
  const { about } = resume

  return (
    <section>
      <h2 className={shared.heading}>About Me</h2>
      <div className={styles.paragraphs}>
        <p>
          <strong>{about.headline}</strong>
        </p>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className={styles.highlightsLabel}>Core focus areas</p>
      <div className={styles.highlights}>
        {about.highlights.map((highlight) => (
          <span className={styles.highlight} key={highlight}>
            {highlight}
          </span>
        ))}
      </div>
    </section>
  )
}
