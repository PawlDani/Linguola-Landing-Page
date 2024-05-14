import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./IndividualCourse.module.scss";
import kursyIndywidualneImage from "../../assets/kursyIndywidualne.webp";
import kursyIndywidualneAlt from "../../assets/kursyIndywidualneAlt.webp";
import unitedKingdomFlag from "../../assets/united-kingdom.png";
import germanyFlag from "../../assets/germany.png";
import italyFlag from "../../assets/italy.png";
import Button from "../Buttons/Button";
import { useTranslation } from "react-i18next";

function IndividualCourse() {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(kursyIndywidualneImage);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 950) {
        setCurrentImage(kursyIndywidualneAlt);
      } else {
        setCurrentImage(kursyIndywidualneImage);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.individualCourse} id="individualCourse">
      <div className={`${styles.individualCourseContent} container`}>
        <div className={styles.individualCourseImage}>
          <img src={currentImage} alt={t("individualCourse.imageAlt")} />
        </div>
        <div className={styles.individualCourseTypes}>
          <div className={styles.individualCourseHeader}>
            <h3 className={styles.individualCourseHeaderText}>
              {t("individualCourse.title")}
            </h3>
            <p className={styles.individualCourseHeaderDescription}>
              {t("individualCourse.description")}
            </p>
          </div>
          <div className={styles.individualCoursePackages}>
            <div className={styles.individualCoursePackage}>
              <h3 className={styles.individualCoursePackageHeader}>
                {t("individualCourse.package")}
              </h3>

              {windowWidth <= 435 ? (
                <>
                  <p>
                    {t("individualCourse.trialLesson")} <br /> [60 min]
                  </p>
                  <br />
                  <p>{t("individualCourse.oneTimeClasses")}</p>
                  <br />
                  <p>
                    {t("individualCourse.monthlyCourse")} <br /> [4{" "}
                    {t("individualCourse.classes")}]
                  </p>
                  <br />
                  <p>
                    {t("individualCourse.quarterlyCourse")} <br /> [12{" "}
                    {t("individualCourse.classes")}]
                  </p>
                </>
              ) : (
                <>
                  <p>{t("individualCourse.trialLesson")}</p>
                  <p>{t("individualCourse.oneTimeClasses")}</p>
                  <p>
                    {t("individualCourse.monthlyCourse")} [4{" "}
                    {t("individualCourse.classes")}]
                  </p>
                  <p>
                    {t("individualCourse.quarterlyCourse")} [12{" "}
                    {t("individualCourse.classes")}]
                  </p>
                </>
              )}
            </div>
            <div className={styles.individualCoursePricing}>
              <h3 className={styles.individualCoursePricingHeader}>
                {t("individualCourse.price")}
              </h3>
              {windowWidth <= 435 ? (
                <>
                  <p>{t("individualCourse.priceTrial")}</p>
                  <br />
                  <br />
                  <p>{t("individualCourse.priceOneTime")}</p>
                  <br />
                  <br />
                  <p>{t("individualCourse.priceMonthly")}</p>
                  <br />
                  <br />
                  <p>{t("individualCourse.priceQuarterly")}</p>
                </>
              ) : (
                <>
                  <p>{t("individualCourse.priceTrial")}</p>
                  <p>{t("individualCourse.priceOneTime")}</p>
                  <p>{t("individualCourse.priceMonthly")}</p>
                  <p>{t("individualCourse.priceQuarterly")}</p>
                </>
              )}
            </div>
          </div>
          <div className={styles.individualCourseLanguages}>
            <h3 className={styles.individualCourseLanguagesHeader}>
              {t("individualCourse.availableLanguages")}
            </h3>
            <div className={styles.languages}>
              <p>
                <img
                  src={unitedKingdomFlag}
                  alt={t("individualCourse.englishFlag")}
                  className={styles.flag}
                />{" "}
                {t("individualCourse.english")}
              </p>
              <p>
                <img
                  src={germanyFlag}
                  alt={t("individualCourse.germanFlag")}
                  className={styles.flag}
                />{" "}
                {t("individualCourse.german")}
              </p>
              <p>
                <img
                  src={italyFlag}
                  alt={t("individualCourse.italianFlag")}
                  className={styles.flag}
                />{" "}
                {t("individualCourse.italian")}
              </p>
            </div>
            <div className={styles.individualCourseBtn}>
              <ScrollLink
                to="individual"
                smooth={true}
                duration={1500}
                offset={-100}
              >
                <Button variant="primary">
                  {t("individualCourse.readMore")}
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndividualCourse;
