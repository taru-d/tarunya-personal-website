import styles from './Resume.module.css'

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={`${styles.header} container`}>
        <h1 className={styles.heading}>Résumé</h1>
        {/* TODO: update the PDF download link text / filename as needed */}
        <a
          href={import.meta.env.BASE_URL + 'resume.pdf'}
          download="Dharmarajan_Tarunya_Resume.pdf"
          className={styles.download}
        >
          Download PDF ↓
        </a>
      </div>

      <div className={styles.viewerWrap}>
        {/* PDF lives at /public/resume.pdf */}
        <iframe
          src={import.meta.env.BASE_URL + 'resume.pdf'}
          title="Tarunya Dharmarajan — Résumé" /* TODO: update title if name changes */
          className={styles.viewer}
        />
      </div>
    </main>
  )
}
