import React from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerLinks}>
          <ScrollLink
            to="hero"
            className={styles.footerLink}
            smooth={true}
            duration={1500}
          >
            {t("footer.start")}
          </ScrollLink>
          <ScrollLink
            to="benefits"
            className={styles.footerLink}
            smooth={true}
            duration={1500}
            offset={-100}
          >
            {t("footer.aboutUs")}
          </ScrollLink>
          <ScrollLink
            to="programs"
            className={styles.footerLink}
            smooth={true}
            duration={1500}
            offset={-100}
          >
            {t("footer.offer")}
          </ScrollLink>
          <ScrollLink
            to="contact"
            className={styles.footerLink}
            smooth={true}
            duration={1500}
          >
            {t("footer.contact")}
          </ScrollLink>
        </div>
        <div className={styles.footerSocials}>
          <a
            href="https://www.facebook.com/profile.php?id=61555399645470"
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
            © {new Date().getFullYear()} Linguola. {t("footer.rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
