import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./BusinessCourse.module.scss";
import kursyBiznesoweImage from "../../assets/kursyBiznesowe.webp";
import kursyBiznesoweAlt from "../../assets/kursyBiznesoweAlt.webp";
import unitedKingdomFlag from "../../assets/united-kingdom.png";
import germanyFlag from "../../assets/germany.png";
import Button from "../Buttons/Button";
import { useTranslation } from "react-i18next";

function BusinessCourse() {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(kursyBiznesoweImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setCurrentImage(kursyBiznesoweAlt);
      } else {
        setCurrentImage(kursyBiznesoweImage);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.businessCourse} id="businessCourse">
      <div className={`${styles.businessCourseContent} container`}>
        <div className={styles.businessCourseImage}>
          <img src={currentImage} alt={t("businessCourse.imageAlt")} />
        </div>
        <div className={styles.businessCourseTypes}>
          <div className={styles.businessCourseHeader}>
            <h3 className={styles.businessCourseHeaderText}>
              {t("businessCourse.title")}
            </h3>
            <p className={styles.businessCourseHeaderDescription}>
              {t("businessCourse.description")}
            </p>
          </div>
          <div className={styles.businessCoursePackages}>
            <div className={styles.businessCoursePackage}>
              <h3 className={styles.businessCoursePackageHeader}>
                {t("businessCourse.package")}
              </h3>
              <p>{t("businessCourse.individualCourse")}</p>
              <p>{t("businessCourse.groupCourse")}</p>
            </div>
            <div className={styles.businessCoursePricing}>
              <h3 className={styles.businessCoursePricingHeader}>
                {t("businessCourse.price")}
              </h3>
              <p>{t("businessCourse.priceIndividual")}</p>
              <p>{t("businessCourse.priceGroup")}</p>
            </div>
          </div>
          <div className={styles.businessCourseLanguages}>
            <h3 className={styles.businessCourseLanguagesHeader}>
              {t("businessCourse.availableLanguages")}
            </h3>
            <div className={styles.languages}>
              <p>
                <img
                  src={unitedKingdomFlag}
                  alt={t("businessCourse.englishFlag")}
                  className={styles.flag}
                />
                {t("businessCourse.english")}
              </p>
              <p>
                <img
                  src={germanyFlag}
                  alt={t("businessCourse.germanFlag")}
                  className={styles.flag}
                />
                {t("businessCourse.german")}
              </p>
            </div>
            <div className={styles.businessCourseBtn}>
              <ScrollLink
                to="business"
                smooth={true}
                duration={1500}
                offset={-100}
              >
                <Button variant="primary">
                  {t("businessCourse.readMore")}
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessCourse;
