import React, { useState, useEffect } from "react";
import styles from "./BusinessCourse.module.scss";
import kursyBiznesoweImage from "../../assets/kursyBiznesowe.png";
import kursyBiznesoweAlt from "../../assets/kursyBiznesoweAlt.png";
import unitedKingdomFlag from "../../assets/united-kingdom.png";
import germanyFlag from "../../assets/germany.png";
import Button from "../Buttons/Button";

function BusinessCourse() {
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
          <img src={currentImage} alt="Business Courses" />
        </div>
        <div className={styles.businessCourseTypes}>
          <div className={styles.businessCourseHeader}>
            <h3 className={styles.businessCourseHeaderText}>
              JĘZYKI SPECJALISTYCZNE - KURSY BIZNESOWE
            </h3>
            <p className={styles.businessCourseHeaderDescription}>
              Kursy języka specjalistycznego dostępne są w formie zajęć
              indywidualnych i grupowych. <br></br> Zajęcia obejmują różnorodne
              aspekty biznesu, w tym szeroko pojętą komunikację biznesową z
              obszarów takich jak finanse, logistyka, handel, marketing,
              zarządzanie i obsługa klienta.
            </p>
          </div>
          <div className={styles.businessCoursePackages}>
            <div className={styles.businessCoursePackage}>
              <h3 className={styles.businessCoursePackageHeader}>PAKIET</h3>
              <p>Kurs indywidualny</p>
              <p>Kurs grupowy</p>
            </div>
            <div className={styles.businessCoursePricing}>
              <h3 className={styles.businessCoursePricingHeader}>CENA</h3>
              <p>120.00 zł</p>
              <p>70.00 zł</p>
            </div>
          </div>
          <div className={styles.businessCourseLanguages}>
            <h3 className={styles.businessCourseLanguagesHeader}>
              DOSTĘPNE JĘZYKI
            </h3>
            <div className={styles.languages}>
              <p>
                <img
                  src={unitedKingdomFlag}
                  alt="English flag"
                  className={styles.flag}
                />
                Angielski
              </p>
              <p>
                <img
                  src={germanyFlag}
                  alt="German flag"
                  className={styles.flag}
                />
                Niemiecki
              </p>
            </div>
            <div className={styles.businessCourseBtn}>
              <Button
                variant="primary"
                onClick={() => (window.location.href = "#business")}
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

export default BusinessCourse;
