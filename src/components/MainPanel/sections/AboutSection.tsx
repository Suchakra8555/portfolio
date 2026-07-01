import { resume } from '../../../data/resume'
import styles from './AboutSection.module.css'
import shared from './sectionShared.module.css'

export function AboutSection() {
  const { about, basics } = resume

  return (
    <section>
      <h2 className={shared.heading}>About Me</h2>
      <div className={styles.introRow}>
        <div className={styles.introText}>
          <p className={styles.name}>{basics.name}</p>
          <p>
            <strong>{about.headline}</strong>
          </p>
        </div>
        <img className={styles.photo} src="/5_peicce_suit_pic.png" alt={basics.name} />
      </div>
      <div className={styles.paragraphs}>
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
