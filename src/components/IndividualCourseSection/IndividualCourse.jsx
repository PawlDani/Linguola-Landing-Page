import React, { useState, useEffect } from "react";
import styles from "./IndividualCourse.module.scss";
import kursyIndywidualneImage from "../../assets/kursyIndywidualne.png";
import kursyIndywidualneAlt from "../../assets/kursyIndywidualneAlt.png";
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
              Kursy indywidualne, stworzone z myślą o Twoich unikalnych
              potrzebach językowych! Jeśli zależy Ci na płynnym wyrażaniu się,
              perfekcji gramatycznej, lub przygotowaniu do egzaminów i
              certyfikatów, spersonalizowane zajęcia są idealnym rozwiązaniem.
            </p>
          </div>
          <div className={styles.individualCoursePackages}>
            <div className={styles.individualCoursePackage}>
              <h3 className={styles.individualCoursePackageHeader}>PAKIET</h3>

              {windowWidth <= 435 ? (
                <>
                  <p>
                    Jednorazowe zajęcia <br></br> [60 min]
                  </p>
                  <br></br>
                  <p>
                    Kurs miesięczny <br></br> [4 spotkania po 60 min]
                  </p>
                  <br></br>
                  <p>
                    Kurs kwartalny<br></br> [12 spotkań po 60 min]
                  </p>
                </>
              ) : (
                <>
                  <p>Jednorazowe zajęcia [60 min]</p>
                  <p>Kurs miesięczny [4 spotkania po 60 min]</p>
                  <p>Kurs kwartalny [12 spotkań po 60 min]</p>
                </>
              )}
            </div>
            <div className={styles.individualCoursePricing}>
              <h3 className={styles.individualCoursePricingHeader}>CENA</h3>
              {windowWidth <= 435 ? (
                <>
                  <p>100 zł </p>
                  <br></br>
                  <br></br>
                  <p>390 zł</p>
                  <br></br>
                  <br></br>
                  <p>1100 zł</p>
                </>
              ) : (
                <>
                  <p>100 zł</p>
                  <p>390 zł</p>
                  <p>1100 zł</p>
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
              <Button
                variant="primary"
                onClick={() => (window.location.href = "#individual")}
              >
                CZYTAJ WIĘCEJ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndividualCourse;
