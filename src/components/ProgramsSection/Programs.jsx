// src/components/Programs/Programs.jsx
import React, { useState, useEffect } from "react";
import styles from "./Programs.module.scss";
import ofertaImage from "../../assets/programs.png"; // Ensure the correct path
import ofertaImageSmall from "../../assets/programsAlt.png"; // Ensure the correct path
import Button from "../Buttons/Button"; // Adjust the path to your Button component

function Programs() {
  // state to hold the current image src
  const [currentImage, setCurrentImage] = useState(ofertaImage);

  // useEffect to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      // Check if window width is less than or equal to 950px
      if (window.innerWidth <= 950) {
        setCurrentImage(ofertaImageSmall);
      } else {
        setCurrentImage(ofertaImage);
      }
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Call handleResize initially in case the user starts at < 950px
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <section className={styles.programs} id="programs">
      <div className={`${styles.programsContent} container`}>
        <div className={styles.programsHeader}>
          <h2 className={styles.programsHeaderText}>OFERTA</h2>
        </div>
        <div className={styles.programsIndividualWrapper}>
          <div className={styles.programsImage}>
            <img src={currentImage} alt="Programs" />
          </div>
          <div className={styles.programsIndividual}>
            <div className={styles.programsSingle}>
              <div className={styles.programsSingleDescription}>
                <h3 className={styles.programsSingleHeader}>
                  KURSY INDYWIDUALNE
                </h3>
                <p className={styles.programsSingleText}>
                  Zajęcia indywidualne dostosowane do Twoich potrzeb
                </p>
              </div>
              <div className={styles.programsSingleBtn}>
                <Button
                  variant="secondary"
                  onClick={() => (window.location.href = "#individualCourse")}
                >
                  DOWIEDZ SIĘ WIECEJ
                </Button>
              </div>
            </div>

            {/* Group Courses */}
            <div className={styles.programsSingle}>
              <div className={styles.programsSingleDescription}>
                <h3 className={styles.programsSingleHeader}>KURSY GRUPOWE</h3>
                <p className={styles.programsSingleText}>
                  Interaktywne kursy w małych grupach
                </p>
              </div>
              <div className={styles.programsSingleBtn}>
                <Button
                  variant="secondary"
                  onClick={() => (window.location.href = "#groupCourse")}
                >
                  DOWIEDZ SIĘ WIECEJ
                </Button>
              </div>
            </div>

            {/* Specialized Language Courses */}
            <div className={styles.programsSingle}>
              <div className={styles.programsSingleDescription}>
                <h3 className={styles.programsSingleHeader}>
                  JĘZYKI SPECJALISTYCZNE
                </h3>
                <p className={styles.programsSingleText}>
                  Zajęcia indywidualne oraz kursy grupowe języka z różnych
                  dziedzin biznesu
                </p>
              </div>
              <div className={styles.programsSingleBtn}>
                <Button
                  variant="secondary"
                  onClick={() => (window.location.href = "#businessCourse")}
                >
                  DOWIEDZ SIĘ WIECEJ
                </Button>
              </div>
            </div>

            {/* Courses for Companies */}
            <div className={styles.programsSingle}>
              <div className={styles.programsSingleDescription}>
                <h3 className={styles.programsSingleHeader}>KURSY DLA FIRM</h3>
                <p className={styles.programsSingleText}>
                  Kursy grupowe dla pracowników
                </p>
              </div>
              <div className={styles.programsSingleBtn}>
                <Button
                  variant="secondary"
                  onClick={() => (window.location.href = "#companiesCourse")}
                >
                  DOWIEDZ SIĘ WIECEJ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
