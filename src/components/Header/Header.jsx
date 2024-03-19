import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
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
          <ScrollLink
            to="hero"
            className={styles.headerLogoLink}
            smooth={true}
            duration={500}
          >
            <img src={logo} alt="Logo" className={styles.headerLogo} />
          </ScrollLink>
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
              <ScrollLink
                to="hero"
                className={styles.navigationLink}
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Start
              </ScrollLink>
            </li>
            <li className={styles.navigationItem}>
              <ScrollLink
                to="benefits"
                className={styles.navigationLink}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                offset={-100}
              >
                O nas
              </ScrollLink>
            </li>
            <li className={styles.navigationItem}>
              <ScrollLink
                to="programs"
                className={styles.navigationLink}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                offset={-100}
              >
                Oferta
              </ScrollLink>
            </li>
            <li className={styles.navigationItem}>
              <ScrollLink
                to="contact"
                className={styles.navigationLink}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                offset={-100}
              >
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
