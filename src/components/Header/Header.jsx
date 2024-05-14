import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import germanyFlag from "../../assets/germany.png";
import polandFlag from "../../assets/poland.png";
import ukFlag from "../../assets/united-kingdom.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
                {t("start")}
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
                {t("about_us")}
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
                {t("offer")}
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
                {t("contact")}
              </ScrollLink>
            </li>
            <li className={styles.navigationItem}>
              <a href="/app" className={styles.navigationLink}>
                {t("application")}
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.languageSwitcher}>
          <button onClick={() => changeLanguage("en")}>
            <img src={ukFlag} alt="English" />
          </button>
          <button onClick={() => changeLanguage("de")}>
            <img src={germanyFlag} alt="German" />
          </button>
          <button onClick={() => changeLanguage("pl")}>
            <img src={polandFlag} alt="Polish" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
