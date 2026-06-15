import styles from './Resume.module.css'

const education = [
  {
    institution: 'New York University, Gallatin School of Individualized Study',
    degree: 'Individualized Studies in Computer Science, AI, and Public Policy (B.A.)',
    location: 'New York, New York',
    dates: 'August 2025 – May 2029',
    bullets: [
      'Activities: NYU Model UN, Stern Business and Law Association, Undergraduate Law Review, Applied Public Policy Review',
    ],
  },
]

const experiences = [
  {
    org: 'Consumer Federation of America',
    role: 'Technology Policy Intern',
    location: 'Washington, D.C.',
    dates: 'January 2026 – May 2026',
    bullets: [
      'Developed a list of lobbying rules for all 50 states to support lobbying operations for a model chatbot safety bill.',
      'Researched and compiled a list of all chatbot-related legislation in the United States, analyzing policies for scope of protections.',
      'Currently developing a bi-weekly tech policy newsletter, focusing on the latest legislative developments in technology.',
      'Tracking corporate actions for compliance with regulatory standards, researching impacts on consumer interests.',
    ],
  },
  {
    org: 'PETAL (Policy, Ethics, Technology, Advocacy, and Law) @ NYU',
    role: 'Cofounder',
    location: 'New York, New York',
    dates: 'August 2025 – Present',
    bullets: [
      'Planned and executed 3 tech policy events, handling event itinerary, marketing, and coordination with other groups.',
      'Conducted cold outreach, newsletter campaigns, and social media marketing to grow the club to 120 members in 1 semester.',
      "Collaborated with other tech policy organizations, establishing a research mentorship program with NYU's Center on Technology Policy.",
      'Edited and authored blogs, research papers, and a newsletter covering tech policy, giving feedback to writers and training researchers.',
    ],
  },
  {
    org: 'Atticus Project',
    role: 'Applied AI Research Intern – Legal and Regulatory Compliance',
    location: 'San Mateo, California',
    dates: 'June 2024 – Present',
    bullets: [
      'Analyzed 1000+ contracts from F500 companies to develop the ACORD dataset, an open-source contract negotiation dataset for lawyers.',
      'Built an AI compliance dataset, analyzing company contracts for compliance with GDPR, EU AI Act, & other regulatory frameworks.',
      'Populated datasets with contract and policy clauses, defined metrics for ranking clauses, managed ranking disparities between attorneys.',
      'Bridged legal data entry and coding team activities, simplifying legal language and overseeing string to JSON conversion of clauses.',
    ],
  },
  {
    org: 'Office of State Senator Aisha Wahab',
    role: 'Staff, Head of Student Activities',
    location: 'Sacramento, California',
    dates: 'December 2021 – June 2025',
    bullets: [
      'Staffed resource fairs, town halls, and other community events, representing the Senator and connecting constituents to state resources.',
      'Gave feedback on legislation such as SB 403 and tracked progress on existing and proposed tech policy legislation, including SB 933.',
      'Recruited, mentored, & supervised 25 student campaigners, teaching voting processes, persuasion techniques, and policy processes.',
      'Attended 150+ hours of canvasses & phone banks, talking to thousands of voters & organizing canvasses with 50+ people.',
    ],
  },
  {
    org: 'ConnectSafely',
    role: 'Youth Advisory Board Member',
    location: 'Palo Alto, California',
    dates: 'June 2024 – August 2025',
    bullets: [
      'Advise on tech legislation, shape national organizational strategies, and develop community resources for safe use of social media.',
      'Author blogs on internet safety, responsible digital practices, and policy implementation to enhance online protections.',
      'Developing a project analyzing trends in social media issues among teens.',
      "Paneled at XRA's 2024 AR, VR, and Policy Conference in Washington, D.C., and represented the board at Safer Internet Day 2025.",
    ],
  },
  {
    org: 'Inspirit AI',
    role: 'Research Intern',
    location: 'Fremont, California',
    dates: 'February 2024 – May 2024',
    bullets: [
      'Developed an AI model to measure algorithmic bias and calculate accuracy scores for recidivism predictions from the COMPAS dataset.',
      'Parsed training data to find potential for algorithmic bias, auditing data inputs as sources of racially biased outputs.',
      "Researched historical background of criminal justice and sentencing procedure to contextualize COMPAS's broader impact.",
      'Presented findings to Stanford and UC San Diego students, analyzing impacts of algorithmic bias in criminal sentencing and racial equality.',
    ],
  },
]

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={`${styles.header} container`}>
        <h1 className={styles.heading}>Résumé</h1>
        <a
          href={import.meta.env.BASE_URL + 'resume.pdf'}
          download="Dharmarajan_Tarunya_Resume.pdf"
          className={styles.download}
        >
          Download PDF ↓
        </a>
      </div>

      <div className={`${styles.content} container`}>
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Education</h2>
          {education.map((edu, i) => (
            <div key={i} className={styles.entry}>
              <div className={styles.entryHeader}>
                <span className={styles.entryOrg}>{edu.institution}</span>
                <span className={styles.entryLocation}>{edu.location}</span>
              </div>
              <div className={styles.entrySubheader}>
                <span className={styles.entryRole}>{edu.degree}</span>
                <span className={styles.entryDates}>{edu.dates}</span>
              </div>
              <ul className={styles.bullets}>
                {edu.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Experience</h2>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.entry}>
              <div className={styles.entryHeader}>
                <span className={styles.entryOrg}>{exp.org}</span>
                <span className={styles.entryLocation}>{exp.location}</span>
              </div>
              <div className={styles.entrySubheader}>
                <span className={styles.entryRole}>{exp.role}</span>
                <span className={styles.entryDates}>{exp.dates}</span>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
