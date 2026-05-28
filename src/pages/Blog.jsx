import styles from './Blog.module.css'

// Each entry: { title, publication, date, url }
const posts = [
  {
    id: 1,
    title: 'Algorithmic Hiring: Addressing Algorithmic Bias in Automated Hiring Systems',
    publication: 'Undergraduate Law Review at NYU',
    date: 'April 2026',
    url: 'https://ulrnyu.org/algorithmic-hiring',
  },
  {
    id: 2,
    title: 'Immigration in the AI Age',
    publication: 'NYU APPR',
    date: 'November 20, 2025',
    url: 'https://nyuappr.pubpub.org/pub/h35523v2/release/1',
  },
  {
    id: 3,
    title: "How OpenAI's Sora Tests Privacy, Creativity, and Policy",
    publication: 'PETAL — NYU',
    date: 'November 1, 2025',
    url: 'https://petalnyu.github.io/petal-nyu/pages/pages/2025/2025-11-01-sora/',
  },
  {
    id: 4,
    title: 'Pixels, Prompts, and Policy: AI Through a Youth Lens',
    publication: 'ConnectSafely',
    date: 'February 18, 2025',
    url: 'https://connectsafely.org/pixels-prompts-and-policy-ai-through-a-youth-lens/',
  },
  {
    id: 5,
    title: 'Fine-Tuning Social Media to Make It Work for Me',
    publication: 'ConnectSafely',
    date: 'October 16, 2024',
    url: 'https://connectsafely.org/fine-tuning-social-media-to-make-it-work-for-me/',
  },
]

export default function Blog() {
  return (
    <main className={`${styles.main} container`}>
      {/* ── Medium banner ── */}
      <div className={styles.banner}>
        <div className={styles.bannerCopy}>
          <span className={styles.bannerLabel}>Writing</span>
          <p className={styles.bannerText}>
            I publish essays on tech, equity, and organizing.{' '}
            Follow along on Medium for new pieces.
          </p>
        </div>
        {/* TODO: confirm Medium URL */}
        <a
          href="https://medium.com/@d.tarunya"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bannerCta}
        >
          Follow on Medium →
        </a>
      </div>

      {/* ── Page heading ── */}
      <h1 className={styles.heading}>Past Work</h1>

      {/* ── Post list ── */}
      <ol className={styles.list}>
        {posts.map((post) => (
          <li key={post.id} className={styles.entry}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.entryLink}
            >
              <span className={styles.entryTitle}>{post.title}</span>
              <span className={styles.entryArrow}>↗</span>
            </a>
            <div className={styles.entryMeta}>
              <span className={styles.entryPub}>{post.publication}</span>
              <span className={styles.entryDot}>·</span>
              <span className={styles.entryDate}>{post.date}</span>
            </div>
          </li>
        ))}
      </ol>
    </main>
  )
}
