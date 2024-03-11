// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerLinks}>
          <a href="/" className={styles.footerLink}>
            Start
          </a>
          <a href="/about" className={styles.footerLink}>
            O nas
          </a>
          <a href="/services" className={styles.footerLink}>
            Oferta
          </a>
          <a href="/contact" className={styles.footerLink}>
            Kontakt
          </a>
        </div>
        <div className={styles.footerSocials}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className={styles.footerCopy}>
          <p>
            © {new Date().getFullYear()} Linguola. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
