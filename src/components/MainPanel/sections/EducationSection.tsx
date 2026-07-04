import { resume } from '../../../data/resume'
import shared from './sectionShared.module.css'
import styles from './EducationSection.module.css'

export function EducationSection() {
  return (
    <section>
      <h2 className={shared.heading}>Education</h2>
      <p className={shared.intro}>My academic background.</p>
      {resume.education.map((edu) => (
        <div className={styles.card} key={edu.institution}>
          <div className={styles.head}>
            <div className={styles.degreeGroup}>
              {edu.logo && (
                <img className={styles.logo} src={edu.logo} alt="" aria-hidden="true" />
              )}
              <span className={styles.degree}>{edu.degree}</span>
            </div>
            <span className={styles.years}>{edu.years}</span>
          </div>
          <p className={styles.institution}>{edu.institution}</p>
          <p className={styles.meta}>
            Specialization: {edu.specialization} · CGPA: {edu.cgpa}
          </p>
          <p className={styles.courseworkLabel}>Relevant coursework</p>
          <div className={styles.tags}>
            {edu.coursework.map((course) => (
              <span className={styles.tag} key={course}>
                {course}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
