import styles from './Contact.module.css'

// TODO: add more contact platforms here as needed — each needs { icon, label, href, display }
const contacts = [
  {
    id: 'email',
    icon: '✉',
    label: 'Email',
    // TODO: confirm email address
    href: 'mailto:td2806@nyu.edu',
    display: 'td2806@nyu.edu',
  },
  {
    id: 'linkedin',
    icon: 'in',
    label: 'LinkedIn',
    // TODO: confirm LinkedIn URL
    href: 'https://www.linkedin.com/in/tarunya-dharmarajan-8727aa290/',
    display: 'tarunya-dharmarajan',
    external: true,
  },
]

export default function Contact() {
  return (
    <main className={`${styles.main} container`}>
      <div className={styles.top}>
        <h1 className={styles.heading}>Get in touch</h1>
        {/* TODO: update blurb as needed */}
        <p className={styles.sub}>
          Whether you&apos;re interested in collaborating, have a question, or just
          want to say hello — I&apos;d love to hear from you.
        </p>
      </div>

      <ul className={styles.list}>
        {contacts.map(({ id, icon, label, href, display, external }) => (
          <li key={id} className={styles.card}>
            <a
              href={href}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={styles.cardLink}
            >
              <span className={styles.cardIcon} aria-hidden="true">
                {icon}
              </span>
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>{label}</span>
                <span className={styles.cardDisplay}>{display}</span>
              </div>
              <span className={styles.cardArrow} aria-hidden="true">
                {external ? '↗' : '→'}
              </span>
            </a>
          </li>
        ))}

        {/* Placeholder slot — remove once you have a third real platform */}
        {/* TODO: add more platforms (e.g. Twitter/X, GitHub, Instagram) */}
      </ul>
    </main>
  )
}
