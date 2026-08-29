import { resume } from '../../../data/resume'
import shared from './sectionShared.module.css'
import styles from './ResumeSection.module.css'

export function ResumeSection() {
  const { basics } = resume

  return (
    <section>
      <h2 className={shared.heading}>Resume</h2>
      <p className={shared.intro}>
        A quick look at my resume, or grab the PDF for offline reading.
      </p>
      <div className={styles.card}>
        <div className={styles.viewer}>
          <iframe
            className={styles.frame}
            src={`${basics.resumeFileUrl}#view=FitH`}
            title={`${basics.name} — Resume`}
          />
        </div>
        <div className={styles.actions}>
          <a
            className={styles.cta}
            href={basics.resumeFileUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
          <a className={styles.secondaryCta} href={basics.resumeFileUrl} download>
            Download PDF
          </a>
        </div>
      </div>
    </section>
  )
}
