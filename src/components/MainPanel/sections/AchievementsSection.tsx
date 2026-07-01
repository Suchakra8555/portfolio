import { resume } from '../../../data/resume'
import shared from './sectionShared.module.css'
import styles from './AchievementsSection.module.css'

export function AchievementsSection() {
  return (
    <section>
      <h2 className={shared.heading}>Achievements</h2>
      <p className={shared.intro}>Milestones I'm proud of.</p>
      <div className={styles.list}>
        {resume.achievements.map((achievement) => (
          <div className={styles.item} key={achievement.id}>
            <p className={styles.title}>{achievement.title}</p>
            <p className={styles.description}>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
