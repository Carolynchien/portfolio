import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Nav.module.css'
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navSecondContainer}>
        <div className={styles.languageBtn}>
          <button>EN</button>
          <button>CN</button>
        </div>
        <div className={styles.navLinkBtn}>
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/projectdetails">
            <a className="nav-link">Projects</a>
          </Link>
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
