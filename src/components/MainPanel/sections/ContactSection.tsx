import { resume } from '../../../data/resume'
import shared from './sectionShared.module.css'
import styles from './ContactSection.module.css'

const PROFILE_LABELS: { key: keyof typeof resume.basics.links; label: string }[] = [
  { key: 'github', label: 'GitHub' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'leetcode', label: 'LeetCode' },
]

export function ContactSection() {
  const { basics } = resume
  const profiles = PROFILE_LABELS.filter(({ key }) => Boolean(basics.links[key]))

  return (
    <section>
      <h2 className={shared.heading}>Contact</h2>
      <p className={shared.intro}>Have a role, project, or question in mind? Reach out.</p>
      <div className={styles.card}>
        <p className={styles.label}>Email</p>
        <a className={styles.emailLink} href={`mailto:${basics.email}`}>
          {basics.email}
        </a>
        <p className={styles.label}>Phone</p>
        <a className={styles.phoneLink} href={`tel:${basics.phone.replace(/\s+/g, '')}`}>
          {basics.phone}
        </a>
        <p className={styles.location}>{basics.location}</p>
        <div className={styles.actions}>
          <a className={styles.cta} href={`mailto:${basics.email}`}>
            Email me
          </a>
          <a className={styles.secondaryCta} href="#resume">
            View resume
          </a>
        </div>
        {profiles.length > 0 && (
          <>
            <p className={styles.label}>Profiles</p>
            <div className={styles.profiles}>
              {profiles.map(({ key, label }) => (
                <a
                  className={styles.profileLink}
                  key={key}
                  href={basics.links[key]}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
