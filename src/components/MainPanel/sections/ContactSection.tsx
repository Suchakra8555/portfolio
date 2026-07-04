import { resume } from '../../../data/resume'
import shared from './sectionShared.module.css'
import styles from './ContactSection.module.css'

export function ContactSection() {
  const { basics } = resume

  return (
    <section>
      <h2 className={shared.heading}>Contact</h2>
      <p className={shared.intro}>Have a role, project, or question in mind? Reach out.</p>
      <div className={styles.card}>
        <p className={styles.label}>Email</p>
        <a className={styles.emailLink} href={`mailto:${basics.email}`}>
          {basics.email}
        </a>
        <p className={styles.location}>{basics.location}</p>
        <a className={styles.cta} href={`mailto:${basics.email}`}>
          Email me
        </a>
      </div>
    </section>
  )
}
