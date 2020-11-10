import Link from 'next/link'

import styles from './Header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <nav className={styles.nav}>
        <a href="https://medium.com/cafe-e-tech">Blog</a>
        <a
          className={styles.contactLink}
          href="mailto:victor.bona@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </nav>
    </div>
  </header>
)

export default Header
