import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./IndividualCourse.module.scss";
import kursyIndywidualneImage from "../../assets/kursyIndywidualne.webp";
import kursyIndywidualneAlt from "../../assets/kursyIndywidualneAlt.webp";
import unitedKingdomFlag from "../../assets/united-kingdom.png";
import germanyFlag from "../../assets/germany.png";
import italyFlag from "../../assets/italy.png";
import Button from "../Buttons/Button";

function IndividualCourse() {
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
          <img src={currentImage} alt="Individual Courses" />
        </div>
        <div className={styles.individualCourseTypes}>
          <div className={styles.individualCourseHeader}>
            <h3 className={styles.individualCourseHeaderText}>
              KURSY INDYWIDUALNE
            </h3>
            <p className={styles.individualCourseHeaderDescription}>
              Kursy indywidualne, stworzone z myślą o Twoich potrzebach
              językowych! Jeśli zależy Ci na płynnym wyrażaniu się, perfekcji
              gramatycznej lub przygotowaniu do egzaminów i certyfikatów,
              zajęcia indywidualne są idealnym rozwiązaniem.
            </p>
          </div>
          <div className={styles.individualCoursePackages}>
            <div className={styles.individualCoursePackage}>
              <h3 className={styles.individualCoursePackageHeader}>PAKIET</h3>

              {windowWidth <= 435 ? (
                <>
                  <p>
                    Lekcja próbna <br></br> [60 min]
                  </p>
                  <br></br>
                  <p>Zajęcia jednorazowe</p>
                  <br></br>
                  <p>
                    Kurs miesięczny <br></br> [4 spotkania]
                  </p>
                  <br></br>
                  <p>
                    Kurs kwartalny<br></br> [12 spotkań]
                  </p>
                </>
              ) : (
                <>
                  <p>Lekcja próbna </p>
                  <p>Zajęcia jednorazowe </p>
                  <p>Kurs miesięczny [4 spotkania]</p>
                  <p>Kurs kwartalny [12 spotkań]</p>
                </>
              )}
            </div>
            <div className={styles.individualCoursePricing}>
              <h3 className={styles.individualCoursePricingHeader}>CENA</h3>
              {windowWidth <= 435 ? (
                <>
                  <p>80 zł / h</p>
                  <br></br>
                  <br></br>
                  <p>130 zł / h </p>
                  <br></br>
                  <br></br>
                  <p>120 zł / h</p>
                  <br></br>
                  <br></br>
                  <p>100 zł / h</p>
                </>
              ) : (
                <>
                  <p>80 zł / h</p>
                  <p>130 zł / h</p>
                  <p>120 zł / h</p>
                  <p>110 zł / h</p>
                </>
              )}
            </div>
          </div>
          <div className={styles.individualCourseLanguages}>
            <h3 className={styles.individualCourseLanguagesHeader}>
              DOSTĘPNE JĘZYKI
            </h3>
            <div className={styles.languages}>
              <p>
                <img
                  src={unitedKingdomFlag}
                  alt="English flag"
                  className={styles.flag}
                />{" "}
                Angielski
              </p>
              <p>
                <img
                  src={germanyFlag}
                  alt="German flag"
                  className={styles.flag}
                />{" "}
                Niemiecki
              </p>
              <p>
                <img
                  src={italyFlag}
                  alt="Italian flag"
                  className={styles.flag}
                />{" "}
                Włoski
              </p>
            </div>
            <div className={styles.individualCourseBtn}>
              <ScrollLink
                to="individual"
                smooth={true}
                duration={1500}
                offset={-100}
              >
                <Button variant="primary">CZYTAJ WIĘCEJ</Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndividualCourse;
