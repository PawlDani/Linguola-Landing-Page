// src/components/GroupCourse/GroupCourse.jsx
import React from "react";
import styles from "./GroupCourse.module.scss";
import groupCourseImage from "../../assets/groupcourse.png"; // Ensure correct path
import unitedKingdomFlag from "../../assets/united-kingdom.png"; // Ensure correct path
import germanyFlag from "../../assets/germany.png"; // Ensure correct path
import italyFlag from "../../assets/italy.png"; // Ensure correct path
import Button from "../Buttons/Button"; // Adjust path as necessary

function GroupCourse() {
  return (
    <section className={styles.groupCourse} id="groupCourse">
      <div className={`${styles.groupCourseContent} container`}>
        <div className={styles.groupCourseImage}>
          <img src={groupCourseImage} alt="Group Courses" />
        </div>
        <div className={styles.groupCourseTypes}>
          <div className={styles.groupCourseHeader}>
            <h2 className={styles.groupCourseHeaderText}>KURSY GRUPOWE</h2>
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
              <p>Kurs podstawowy - od 0</p>
              <p>Kurs średniozaawansowany - poziom B1</p>
              <p>Kurs zaawansowany - poziom B2 i wyżej</p>
            </div>
            <div className={styles.groupCoursePricing}>
              <h3 className={styles.groupCoursePricingHeader}>CENA</h3>
              <p>55.00 PLN/os.</p>
              <p>65.00 PLN/os.</p>
              <p>70.00 PLN/os.</p>
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
              <Button
                variant="primary"
                onClick={() => (window.location.href = "#group")}
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

export default GroupCourse;
