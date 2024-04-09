import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./GroupCourse.module.scss";
import groupCourseImage from "../../assets/groupcourse.webp";
import groupCourseAlt from "../../assets/groupcourseAlt.webp";
import unitedKingdomFlag from "../../assets/united-kingdom.png";
import germanyFlag from "../../assets/germany.png";
import italyFlag from "../../assets/italy.png";
import Button from "../Buttons/Button";

function GroupCourse() {
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
          <img src={currentImage} alt="Group Courses" />
        </div>
        <div className={styles.groupCourseTypes}>
          <div className={styles.groupCourseHeader}>
            <h3 className={styles.groupCourseHeaderText}>KURSY GRUPOWE</h3>
            <p className={styles.groupCourseHeaderDescription}>
              Kursy grupowe, gdzie nauka staje się interaktywną przygodą w
              małych, zgranych grupach! Intensywne zajęcia gwarantują szybkie
              efekty, umożliwiając Ci rozwijanie umiejętności językowych w
              dynamiczny i przyjazny sposób.
            </p>
          </div>
          <div className={styles.groupCoursePackages}>
            <div className={styles.groupCoursePackage}>
              <h3 className={styles.groupCoursePackageHeader}>PAKIET</h3>

              {windowWidth <= 435 ? (
                <>
                  <p>
                    Kurs podstawowy <br></br> [od 0]
                  </p>
                  <br></br>
                  <p>
                    Kurs średniozaawansowany
                    <br></br> [poziom - B1]
                  </p>
                  <br></br>
                  <p>
                    Kurs zaawansowany <br></br> [B2 i wyżej]
                  </p>
                </>
              ) : (
                <>
                  <p>Kurs podstawowy - od 0</p>
                  <p>Kurs średniozaawansowany - B1</p>
                  <p>Kurs zaawansowany - B2 i wyżej</p>
                </>
              )}
            </div>
            <div className={styles.groupCoursePricing}>
              <h3 className={styles.groupCoursePricingHeader}>CENA</h3>

              {windowWidth <= 435 ? (
                <>
                  <p>55 zł / os.</p>
                  <br></br>
                  <br></br>
                  <p>65 zł / os.</p>
                  <br></br>
                  <br></br>
                  <p>70 zł / os.</p> 
                </>
              ) : (
                <>
                  <p>55 zł / os.</p>
                  <p>65 zł / os.</p>
                  <p>70 zł / os.</p>
                </>
              )}
            </div>
          </div>
          <div className={styles.groupCourseLanguages}>
            <h3 className={styles.groupCourseLanguagesHeader}>
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
            <div className={styles.groupCourseBtn}>
              <ScrollLink
                to="group"
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

export default GroupCourse;
