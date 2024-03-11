// src/components/Header/Header.jsx
import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.headerLogoBox}>
          <a href="/">
            <img src={logo} alt="Logo" className={styles.headerLogo} />
          </a>
        </div>
        <button className={styles.burger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navActive : ""
          }`}
        >
          <ul className={styles.navUl}>
            <li className={styles.navigationItem}>
              <a href="#" className={styles.navigationLink} onClick={closeMenu}>
                Start
              </a>
            </li>
            <li className={styles.navigationItem}>
              <a
                href="#team"
                className={styles.navigationLink}
                onClick={closeMenu}
              >
                O nas
              </a>
            </li>
            <li className={styles.navigationItem}>
              <a
                href="#programs"
                className={styles.navigationLink}
                onClick={closeMenu}
              >
                Oferta
              </a>
            </li>
            <li className={styles.navigationItem}>
              <a
                href="#kontakt"
                className={styles.navigationLink}
                onClick={closeMenu}
              >
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
