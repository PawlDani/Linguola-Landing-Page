import React from "react";
import styles from "./IndividualBenefits.module.scss";
import checkmarkIcon from "../../assets/checkmark.svg";
import { useTranslation } from "react-i18next";

function IndividualBenefits() {
  const { t } = useTranslation();

  const benefitsData = [
    {
      header: t("individualBenefits.personalizedApproach.header"),
      description: t("individualBenefits.personalizedApproach.description"),
    },
    {
      header: t("individualBenefits.flexibleSchedule.header"),
      description: t("individualBenefits.flexibleSchedule.description"),
    },
    {
      header: t("individualBenefits.skillDevelopment.header"),
      description: t("individualBenefits.skillDevelopment.description"),
    },
  ];

  return (
    <section className={styles.individual} id="individual">
      <div className={`${styles.individualContent} container`}>
        <div className={styles.individualHeader}>
          <h1 className={styles.individualHeaderText}>
            {t("individualBenefits.title")}
          </h1>
        </div>
        <div className={styles.individualBenefits}>
          {benefitsData.map((benefit, index) => (
            <div key={index} className={styles.individualBenefitsSingle}>
              <img
                src={checkmarkIcon}
                className={styles.checkmark}
                alt="Checkmark"
              />
              <h2 className={styles.individualBenefitsSingleHeader}>
                {benefit.header}
              </h2>
              <p className={styles.individualBenefitsSingleDescription}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndividualBenefits;
