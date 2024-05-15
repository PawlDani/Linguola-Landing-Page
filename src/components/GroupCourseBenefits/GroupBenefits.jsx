import React from "react";
import styles from "./GroupBenefits.module.scss";
import checkmarkIcon from "../../assets/checkmark.svg";
import { useTranslation } from "react-i18next";

function GroupBenefits() {
  const { t } = useTranslation();

  const groupBenefitsData = [
    {
      header: t("groupBenefits.smallGroups.header"),
      description: t("groupBenefits.smallGroups.description"),
    },
    {
      header: t("groupBenefits.motivatingGroup.header"),
      description: t("groupBenefits.motivatingGroup.description"),
    },
    {
      header: t("groupBenefits.selfStudyMaterials.header"),
      description: t("groupBenefits.selfStudyMaterials.description"),
    },
  ];

  return (
    <section className={styles.group} id="group">
      <div className={`${styles.groupContent} container`}>
        <div className={styles.groupHeader}>
          <h1 className={styles.groupHeaderText}>{t("groupBenefits.title")}</h1>
        </div>
        <div className={styles.groupBenefits}>
          {groupBenefitsData.map((benefit, index) => (
            <div key={index} className={styles.groupBenefitsSingle}>
              <img
                src={checkmarkIcon}
                className={styles.checkmark}
                alt="Checkmark"
              />
              <h2 className={styles.groupBenefitsSingleHeader}>
                {benefit.header}
              </h2>
              <p className={styles.groupBenefitsSingleDescription}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GroupBenefits;
