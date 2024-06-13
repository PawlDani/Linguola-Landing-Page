import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../Buttons/Button";
import { useTranslation } from "react-i18next";

function Modal({ isOpen, content, onClose }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{content}</p>
        <button className={styles.closeButton} onClick={onClose}>
          {t("contact.form.close")}
        </button>
      </div>
    </div>
  );
}

function Contact() {
  const { t } = useTranslation();
  const [formFeedback, setFormFeedback] = useState({
    isOpen: false,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isDataConsentOpen, setIsDataConsentOpen] = useState(false);
  const [isMarketingConsentOpen, setIsMarketingConsentOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const validateForm = (e) => {
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
    const errors = {};

    if (!name) errors.name = t("contact.errors.nameRequired");
    if (!email) {
      errors.email = t("contact.errors.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = t("contact.errors.invalidEmail");
    }
    if (!message) errors.message = t("contact.errors.messageRequired");

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm(e);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // Stop the form from submitting
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_USER_ID
      )
      .then(
        (result) => {
          setFormFeedback({
            isOpen: true,
            message: t("contact.formFeedback.success"),
          });
          console.log(result.text);
          e.target.reset();
          setErrors({}); // Clear errors if the form submission was successful
        },
        (error) => {
          setFormFeedback({
            isOpen: true,
            message: t("contact.formFeedback.failure"),
          });
          console.log(error.text);
        }
      );
  };

  const closeModal = () => setFormFeedback({ isOpen: false, message: "" });

  const openConsentModal = (e, consentType) => {
    e.preventDefault(); // Prevent the default behavior
    e.stopPropagation(); // Prevent the checkbox from being checked
    setModalContent(
      consentType === "data"
        ? t("contact.form.fullDataConsent")
        : t("contact.form.fullMarketingConsent")
    );
    consentType === "data"
      ? setIsDataConsentOpen(true)
      : setIsMarketingConsentOpen(true);
  };

  const closeConsentModal = () => {
    setIsDataConsentOpen(false);
    setIsMarketingConsentOpen(false);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={`${styles.contactContainer} container`}>
        <div className={styles.formWrapper}>
          <form className={styles.contactForm} onSubmit={sendEmail}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder={t("contact.form.name")}
                name="name"
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.inputGroupSplit}>
              <input
                type="email"
                placeholder={t("contact.form.email")}
                name="email"
              />
              <input
                type="tel"
                placeholder={t("contact.form.phone")}
                name="phone"
              />
            </div>
            {errors.email && <p className={styles.error}>{errors.email}</p>}
            <div className={styles.inputGroup}>
              <textarea
                placeholder={t("contact.form.message")}
                name="message"
              ></textarea>
              {errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </div>
            <div className={styles.consentWrapper}>
              <input
                type="checkbox"
                name="dataConsent"
                id="dataConsent"
                required
              />
              <label htmlFor="dataConsent">
                {t("contact.form.dataConsent")}{" "}
                <span
                  onClick={(e) => openConsentModal(e, "data")}
                  className={styles.consentToggle}
                >
                  {t("contact.form.readMore")}
                </span>
              </label>
            </div>
            <div className={styles.consentWrapper}>
              <input
                type="checkbox"
                name="marketingConsent"
                id="marketingConsent"
              />
              <label htmlFor="marketingConsent">
                {t("contact.form.marketingConsent")}{" "}
                <span
                  onClick={(e) => openConsentModal(e, "marketing")}
                  className={styles.consentToggle}
                >
                  {t("contact.form.readMore")}
                </span>
              </label>
            </div>
            <Button variant="primary" type="submit">
              {t("contact.form.send")}
            </Button>
          </form>
        </div>
        <div className={styles.infoWrapper}>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.description")}</p>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <a href="mailto:info@linguola.pl">
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <span>info@linguola.pl</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isDataConsentOpen || isMarketingConsentOpen}
        content={modalContent}
        onClose={closeConsentModal}
      />
      <Modal
        isOpen={formFeedback.isOpen}
        content={formFeedback.message}
        onClose={closeModal}
      />
    </section>
  );
}

export default Contact;
