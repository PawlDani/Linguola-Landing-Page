import React from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Button from "../Buttons/Button";

function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={`${styles.contactContainer} container`}>
        <div className={styles.formWrapper}>
          {/* Update the form tag below */}
          <form
            className={styles.contactForm}
            action="http://linguola.pl/sendmail.php"
            method="POST"
          >
            <div className={styles.inputGroup}>
              {/* Add name attribute */}
              <input type="text" placeholder="Imię" name="name" />
            </div>
            <div className={styles.inputGroupSplit}>
              {/* Add name attribute */}
              <input type="email" placeholder="Email" name="email" />
              <input type="tel" placeholder="Numer telefonu" name="phone" />
            </div>
            <div className={styles.inputGroup}>
              {/* Add name attribute */}
              <textarea placeholder="Wiadomość" name="message"></textarea>
            </div>
            {/* Ensure the button submits the form */}
            <Button variant="primary" type="submit">
              Wyślij
            </Button>
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
