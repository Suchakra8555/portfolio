import { resume } from '../../../data/resume'
import shared from './sectionShared.module.css'
import styles from './ExperienceSection.module.css'

export function ExperienceSection() {
  return (
    <section>
      <h2 className={shared.heading}>Experience</h2>
      <p className={shared.intro}>Where I've worked and what I've shipped.</p>
      <div className={styles.list}>
        {resume.experience.map((job) => (
          <article className={styles.item} key={job.id}>
            <div className={styles.itemHead}>
              <div className={styles.roleGroup}>
                {job.logo && (
                  <img
                    className={styles.logo}
                    src={job.logo}
                    alt=""
                    aria-hidden="true"
                    style={job.logoBg ? { background: job.logoBg } : undefined}
                  />
                )}
                <span className={styles.role}>{job.role}</span>
              </div>
              <span className={styles.dates}>
                {job.start} – {job.end}
              </span>
            </div>
            <p className={styles.company}>{job.company}</p>
            <ul className={styles.bullets}>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
