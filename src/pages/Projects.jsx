import styles from './Projects.module.css'

// TODO: replace placeholder href with the actual Cover Letter Generator repo URL
const projects = [
  {
    id: 1,
    title: 'Cover Letter Generator',
    description: 'AI-powered tool that generates personalized cover letters',
    type: 'Python · AI',
    url: 'https://github.com/taru-d',
  },
  {
    id: 2,
    title: 'Chief of Staff AI Agent — Walkthrough',
    description: 'A step-by-step walkthrough of building an AI chief of staff agent',
    type: 'Documentation',
    url: 'https://docs.google.com/document/d/1s2IaoZazszPg_CxRHLE5Z39PIOZjGtYEdMruBZGZ6NU/edit?usp=sharing',
  },
]

export default function Projects() {
  return (
    <main className={`${styles.main} container`}>
      {/* ── GitHub banner ── */}
      <div className={styles.banner}>
        <div className={styles.bannerCopy}>
          <span className={styles.bannerLabel}>Code</span>
          <p className={styles.bannerText}>
            Here's a look at what I've been building.{' '}
            Find all my projects on GitHub.
          </p>
        </div>
        <a
          href="https://github.com/taru-d"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bannerCta}
        >
          View on GitHub →
        </a>
      </div>

      {/* ── Page heading ── */}
      <h1 className={styles.heading}>Featured Projects</h1>

      {/* ── Project list ── */}
      <ol className={styles.list}>
        {projects.map((project) => (
          <li key={project.id} className={styles.entry}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.entryLink}
            >
              <span className={styles.entryTitle}>{project.title}</span>
              <span className={styles.entryArrow}>↗</span>
            </a>
            <div className={styles.entryMeta}>
              <span className={styles.entryPub}>{project.description}</span>
              <span className={styles.entryDot}>·</span>
              <span className={styles.entryDate}>{project.type}</span>
            </div>
          </li>
        ))}
      </ol>
    </main>
  )
}
