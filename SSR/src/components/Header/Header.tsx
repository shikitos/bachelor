import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              <a className={styles.navLink}>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <a className={styles.navLink}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
