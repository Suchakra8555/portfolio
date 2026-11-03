import { resume } from '../../../data/resume'
import styles from './AboutSection.module.css'

const FEATURED_COUNT = 3

export function AboutSection() {
  const { about, basics, projects } = resume
  const featured = projects.slice(0, FEATURED_COUNT)

  return (
    <section>
      <div className={styles.hero}>
        <img
          className={styles.mascot}
          src="/5_peicce_suit_pic.png"
          alt={`Portrait of ${basics.name}`}
        />
        <div>
          <h1 className={styles.name}>{basics.name}</h1>
          <p className={styles.role}>{basics.title}</p>
          <p className={styles.claim}>
            I build production voice AI, from SIP trunking through STT, agentic LLM orchestration
            and TTS, and brought end-to-end conversation latency down to roughly 1.15 seconds.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#resume">
              View resume
            </a>
            <a className={styles.secondary} href="#contact">
              Contact me
            </a>
            <a className={styles.secondary} href={basics.resumeFileUrl} download>
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <div className={styles.paragraphs}>
        <p>
          <strong>{about.headline}</strong>
        </p>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h2 className={styles.subheading}>Core focus areas</h2>
      <div className={styles.highlights}>
        {about.highlights.map((highlight) => (
          <span className={styles.highlight} key={highlight}>
            {highlight}
          </span>
        ))}
      </div>

      <h2 className={styles.subheading}>Featured projects</h2>
      <div className={styles.featured}>
        {featured.map((project) => (
          <a className={styles.featuredCard} key={project.id} href="#projects">
            <span className={styles.featuredTitle}>{project.title}</span>
            <p className={styles.featuredText}>{project.description}</p>
          </a>
        ))}
      </div>
      <a className={styles.more} href="#projects">
        See all projects
      </a>
    </section>
  )
}
