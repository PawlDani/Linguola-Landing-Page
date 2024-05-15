import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./GroupCourse.module.scss";
import groupCourseImage from "../../assets/groupcourse.webp";
import groupCourseAlt from "../../assets/groupcourseAlt.webp";
import unitedKingdomFlag from "../../assets/united-kingdom.png";
import germanyFlag from "../../assets/germany.png";
import italyFlag from "../../assets/italy.png";
import Button from "../Buttons/Button";
import { useTranslation } from "react-i18next";

function GroupCourse() {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(groupCourseImage);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 950) {
        setCurrentImage(groupCourseAlt);
      } else {
        setCurrentImage(groupCourseImage);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.groupCourse} id="groupCourse">
      <div className={`${styles.groupCourseContent} container`}>
        <div className={styles.groupCourseImage}>
          <img src={currentImage} alt={t("groupCourse.imageAlt")} />
        </div>
        <div className={styles.groupCourseTypes}>
          <div className={styles.groupCourseHeader}>
            <h3 className={styles.groupCourseHeaderText}>
              {t("groupCourse.title")}
            </h3>
            <p className={styles.groupCourseHeaderDescription}>
              {t("groupCourse.description")}
            </p>
          </div>
          <div className={styles.groupCoursePackages}>
            <div className={styles.groupCoursePackage}>
              <h3 className={styles.groupCoursePackageHeader}>
                {t("groupCourse.package")}
              </h3>

              {windowWidth <= 435 ? (
                <>
                  <p>
                    {t("groupCourse.basicCourse")} <br /> [A1-A2]
                  </p>
                  <br />
                  <p>
                    {t("groupCourse.intermediateCourse")} <br /> [B1]
                  </p>
                  <br />
                  <p>
                    {t("groupCourse.advancedCourse")} <br /> [B2+]
                  </p>
                </>
              ) : (
                <>
                  <p>{t("groupCourse.basicCourse")} - [A1-A2]</p>
                  <p>{t("groupCourse.intermediateCourse")} - [B1]</p>
                  <p>{t("groupCourse.advancedCourse")} - [B2+]</p>
                </>
              )}
            </div>
            <div className={styles.groupCoursePricing}>
              <h3 className={styles.groupCoursePricingHeader}>
                {t("groupCourse.price")}
              </h3>

              {windowWidth <= 435 ? (
                <>
                  <p>{t("groupCourse.priceBasic")}</p>
                  <br />
                  <br />
                  <p>{t("groupCourse.priceIntermediate")}</p>
                  <br />
                  <br />
                  <p>{t("groupCourse.priceAdvanced")}</p>
                </>
              ) : (
                <>
                  <p>{t("groupCourse.priceBasic")}</p>
                  <p>{t("groupCourse.priceIntermediate")}</p>
                  <p>{t("groupCourse.priceAdvanced")}</p>
                </>
              )}
            </div>
          </div>
          <div className={styles.groupCourseLanguages}>
            <h3 className={styles.groupCourseLanguagesHeader}>
              {t("groupCourse.availableLanguages")}
            </h3>
            <div className={styles.languages}>
              <p>
                <img
                  src={unitedKingdomFlag}
                  alt={t("groupCourse.englishFlag")}
                  className={styles.flag}
                />{" "}
                {t("groupCourse.english")}
              </p>
              <p>
                <img
                  src={germanyFlag}
                  alt={t("groupCourse.germanFlag")}
                  className={styles.flag}
                />{" "}
                {t("groupCourse.german")}
              </p>
              <p>
                <img
                  src={italyFlag}
                  alt={t("groupCourse.italianFlag")}
                  className={styles.flag}
                />{" "}
                {t("groupCourse.italian")}
              </p>
            </div>
            <div className={styles.groupCourseBtn}>
              <ScrollLink
                to="group"
                smooth={true}
                duration={1500}
                offset={-100}
              >
                <Button variant="primary">{t("groupCourse.readMore")}</Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GroupCourse;
