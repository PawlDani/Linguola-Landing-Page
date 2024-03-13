// src/components/Contact/Contact.jsx
import React from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Button from "../Buttons/Button"; // Import your Button component

function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={`${styles.contactContainer} container`}>
        <div className={styles.formWrapper}>
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Imię" />
            </div>
            <div className={styles.inputGroupSplit}>
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Numer telefonu" />
            </div>
            <div className={styles.inputGroup}>
              <textarea placeholder="Wiadomość"></textarea>
            </div>
            <Button variant="primary">Wyślij</Button>
          </form>
        </div>
        <div className={styles.infoWrapper}>
          <h2>Kontakt</h2>
          <p>
            Jeśli potrzebujesz dodatkowych informacji, chciałbyś porozmawiać o
            kwestiach związanych z naszymi kursami językowymi lub masz inne
            pytania, skontaktuj się z nami za pomocą dostępnych danych
            kontaktowych.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <a
                href="https://wa.me/48530211105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
                <span>+48 530 211 105</span>
              </a>
            </div>
            <div className={styles.infoItem}>
              <a href="mailto:info@linguola.pl">
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <span>info@linguola.pl</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
