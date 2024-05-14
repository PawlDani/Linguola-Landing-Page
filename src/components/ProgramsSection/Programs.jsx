import React, { useState, useEffect } from "react";
import styles from "./Programs.module.scss";
import ofertaImage from "../../assets/programs.webp";
import ofertaImageSmall from "../../assets/programsAlt.webp";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Buttons/Button";
import { useTranslation } from "react-i18next";

function Programs() {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(ofertaImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setCurrentImage(ofertaImageSmall);
      } else {
        setCurrentImage(ofertaImage);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.programs} id="programs">
      <div className={`${styles.programsContent} container`}>
        <div className={styles.programsHeader}>
          <h2 className={styles.programsHeaderText}>{t("programs.offer")}</h2>
        </div>
        <div className={styles.programsIndividualWrapper}>
          <div className={styles.programsImage}>
            <img src={currentImage} alt="Programs" />
          </div>
          <div className={styles.programsIndividual}>
            <div className={styles.programsSingle}>
              <div className={styles.programsSingleDescription}>
                <h3 className={styles.programsSingleHeader}>
                  {t("programs.individualCourses")}
                </h3>
                <p className={styles.programsSingleText}>
                  {t("programs.oneOnOne")}
                </p>
              </div>
              <div className={styles.programsSingleBtn}>
                <ScrollLink
                  to="individualCourse"
                  smooth={true}
                  duration={1500}
                  offset={-100}
                >
                  <Button variant="secondary">{t("programs.learnMore")}</Button>
                </ScrollLink>
              </div>
            </div>

            {/* Group Courses */}
            <div className={styles.programsSingle}>
              <div className={styles.programsSingleDescription}>
                <h3 className={styles.programsSingleHeader}>
                  {t("programs.groupCourses")}
                </h3>
                <p className={styles.programsSingleText}>
                  {t("programs.interactiveClasses")}
                </p>
              </div>
              <div className={styles.programsSingleBtn}>
                <ScrollLink
                  to="groupCourse"
                  smooth={true}
                  duration={1500}
                  offset={-100}
                >
                  <Button variant="secondary">{t("programs.learnMore")}</Button>
                </ScrollLink>
              </div>
            </div>

            {/* Specialized Language Courses */}
            <div className={styles.programsSingle}>
              <div className={styles.programsSingleDescription}>
                <h3 className={styles.programsSingleHeader}>
                  {t("programs.specializedLanguages")}
                </h3>
                <p className={styles.programsSingleText}>
                  {t("programs.businessLanguage")}
                </p>
              </div>
              <div className={styles.programsSingleBtn}>
                <ScrollLink
                  to="businessCourse"
                  smooth={true}
                  duration={1500}
                  offset={-100}
                >
                  <Button variant="secondary">{t("programs.learnMore")}</Button>
                </ScrollLink>
              </div>
            </div>

            {/* Courses for Companies */}
            <div className={styles.programsSingle}>
              <div className={styles.programsSingleDescription}>
                <h3 className={styles.programsSingleHeader}>
                  {t("programs.coursesForCompanies")}
                </h3>
                <p className={styles.programsSingleText}>
                  {t("programs.groupClasses")}
                </p>
              </div>
              <div className={styles.programsSingleBtn}>
                <ScrollLink
                  to="businessCourse"
                  smooth={true}
                  duration={1500}
                  offset={-100}
                >
                  <Button variant="secondary">{t("programs.learnMore")}</Button>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
