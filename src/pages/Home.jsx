import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} container`}>
        <div className={styles.photoWrap}>
          {/* Headshot image lives at /public/headshot.png */}
          <img
            src={import.meta.env.BASE_URL + 'headshot.png'}
            alt="Tarunya Dharmarajan" /* TODO: update alt text if name changes */
            className={styles.photo}
          />
        </div>

        <div className={styles.copy}>
          {/* TODO: replace with your full name */}
          <h1 className={styles.name}>Tarunya<br />Dharmarajan</h1>

          {/* TODO: update tagline / bio */}
          <p className={styles.tagline}>
            Youth Advocate For Equitable Tech
          </p>
          <p className={styles.bio}>
            NYU student, community organizer, and interdisciplinary researcher working at the intersection of technology, policy, and social justice.
          </p>

          <div className={styles.cta}>
            <Link to="/resume" className={styles.btnPrimary}>View Résumé</Link>
            <Link to="/contact" className={styles.btnSecondary}>Get in touch</Link>
          </div>
        </div>
      </section>

      {/* Thin divider rule */}
      <div className={`${styles.rule} container`} />

      <section className={`${styles.about} container`}>
        {/* TODO: expand or remove this section as you like */}
        <p className={styles.aboutText}>
          I believe technology should serve people — not the other way around.
          Whether I&apos;m writing, organizing, or building, I&apos;m always asking:{' '}
          <em>who gets to shape this, and who gets left out?</em>
        </p>
      </section>
    </main>
  )
}
