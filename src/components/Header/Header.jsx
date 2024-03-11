// src/components/Header/Header.jsx
import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.headerLogoBox}>
          <a href="your-main-site-url">
            <img src={logo} alt="Logo" className={styles.headerLogo} />
          </a>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navUl}>
            <li className={styles.navigationItem}>
              <a href="#" className={styles.navigationLink}>
                Start
              </a>
            </li>
            <li className={styles.navigationItem}>
              <a href="#team" className={styles.navigationLink}>
                O nas
              </a>
            </li>
            <li className={styles.navigationItem}>
              <a href="#programs" className={styles.navigationLink}>
                Oferta
              </a>
            </li>
            <li className={styles.navigationItem}>
              <a href="#kontakt" className={styles.navigationLink}>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
