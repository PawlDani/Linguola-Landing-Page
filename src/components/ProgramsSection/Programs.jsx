import React, { useState, useEffect } from "react";
import styles from "./Programs.module.scss";
import ofertaImage from "../../assets/programs.webp";
import ofertaImageSmall from "../../assets/programsAlt.webp";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Buttons/Button";

function Programs() {
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
                <ScrollLink
                  to="individualCourse"
                  smooth={true}
                  duration={1500}
                  offset={-100}
                >
                  <Button variant="secondary">DOWIEDZ SIĘ WIECEJ</Button>
                </ScrollLink>
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
                <ScrollLink
                  to="groupCourse"
                  smooth={true}
                  duration={1500}
                  offset={-100}
                >
                  <Button variant="secondary">DOWIEDZ SIĘ WIECEJ</Button>
                </ScrollLink>
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
                <ScrollLink
                  to="businessCourse"
                  smooth={true}
                  duration={1500}
                  offset={-100}
                >
                  <Button variant="secondary">DOWIEDZ SIĘ WIECEJ</Button>
                </ScrollLink>
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
                <ScrollLink
                  to="businessCourse"
                  smooth={true}
                  duration={1500}
                  offset={-100}
                >
                  <Button variant="secondary">DOWIEDZ SIĘ WIECEJ</Button>
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
