import React from "react";
import styles from "./BusinessBenefits.module.scss";
import checkmarkIcon from "../../assets/checkmark.svg";
import { useTranslation } from "react-i18next";

function BusinessBenefits() {
  const { t } = useTranslation();

  const businessBenefitsData = [
    {
      header: t("businessBenefits.realCases.header"),
      description: t("businessBenefits.realCases.description"),
    },
    {
      header: t("businessBenefits.wideRange.header"),
      description: t("businessBenefits.wideRange.description"),
    },
    {
      header: t("businessBenefits.industryVocabulary.header"),
      description: t("businessBenefits.industryVocabulary.description"),
    },
  ];

  return (
    <section className={styles.business} id="business">
      <div className={`${styles.businessContent} container`}>
        <div className={styles.businessHeader}>
          <h1 className={styles.businessHeaderText}>
            {t("businessBenefits.title")}
          </h1>
        </div>
        <div className={styles.businessBenefits}>
          {businessBenefitsData.map((benefit, index) => (
            <div key={index} className={styles.businessBenefitsSingle}>
              <img
                src={checkmarkIcon}
                className={styles.checkmark}
                alt="Checkmark"
              />
              <h2 className={styles.businessBenefitsSingleHeader}>
                {benefit.header}
              </h2>
              <p className={styles.businessBenefitsSingleDescription}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessBenefits;
