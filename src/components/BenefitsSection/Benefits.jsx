import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faUserGraduate,
  faLightbulb,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Benefits.module.scss";
import { useTranslation } from "react-i18next";

function Benefits() {
  const { t } = useTranslation();

  return (
    <section className={styles.benefits}>
      <article
        className={`${styles.benefitsContainer} container`}
        id="benefits"
      >
        <div className={styles.benefitsHeader}>
          <h2 className={styles.benefitsTitle}>
            <span className={styles.underline}>{t("benefits.why")}</span>{" "}
            Linguola?
          </h2>
        </div>
        <div className={styles.benefitsBoxes}>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faRocket} className={styles.icon} />
            <h3 className={styles.boxHeader}>{t("benefits.fastLearning")}</h3>
            <p className={styles.boxDescription}>
              {t("benefits.practicalKnowledge")}
            </p>
          </div>

          <div className={styles.box}>
            <FontAwesomeIcon icon={faUserGraduate} className={styles.icon} />
            <h3 className={styles.boxHeader}>
              {t("benefits.personalizedClasses")}
            </h3>
            <p className={styles.boxDescription}>
              {t("benefits.adaptedToNeeds")}
            </p>
          </div>

          <div className={styles.box}>
            <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
            <h3 className={styles.boxHeader}>
              {t("benefits.effectiveMethods")}
            </h3>
            <p className={styles.boxDescription}>
              {t("benefits.experiencedTeacher")}
            </p>
          </div>

          <div className={styles.box}>
            <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
            <h3 className={styles.boxHeader}>
              {t("benefits.specializedLanguage")}
            </h3>
            <p className={styles.boxDescription}>
              {t("benefits.businessCourses")}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Benefits;
