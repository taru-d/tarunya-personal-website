import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/',          label: 'Home' },
  { to: '/resume',    label: 'Resume' },
  { to: '/blog',      label: 'Blog' },
  { to: '/projects',  label: 'Projects' },
  { to: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        {/* TODO: replace with your preferred site name/logo */}
        <NavLink to="/" className={styles.logo}>
          TD
        </NavLink>

        <ul className={styles.links}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
