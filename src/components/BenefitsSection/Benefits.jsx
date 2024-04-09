import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faUserGraduate,
  faLightbulb,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Benefits.module.scss";

function Benefits() {
  return (
    <section className={styles.benefits}>
      <article
        className={`${styles.benefitsContainer} container`}
        id="benefits"
      >
        <div className={styles.benefitsHeader}>
          <h2 className={styles.benefitsTitle}>
            <span className={styles.underline}>Dlaczego</span> Linguola?
          </h2>
        </div>
        <div className={styles.benefitsBoxes}>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faRocket} className={styles.icon} />
            <h3 className={styles.boxHeader}>
              Szybka nauka, natychmiastowe efekty
            </h3>
            <p className={styles.boxDescription}>
              Program online skupia się na praktycznej wiedzy
            </p>
          </div>

          <div className={styles.box}>
            <FontAwesomeIcon icon={faUserGraduate} className={styles.icon} />
            <h3 className={styles.boxHeader}>Zajęcia dostosowane do Ciebie</h3>
            <p className={styles.boxDescription}>
              Zajęcia indywidualne, dostosowane do potrzeb i tempa nauki
            </p>
          </div>

          <div className={styles.box}>
            <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
            <h3 className={styles.boxHeader}>
              Skuteczne metody i wsparcie nauczyciela
            </h3>
            <p className={styles.boxDescription}>
              Doświadczony lektor z pasją to gwarancja przyjemności z nauki
            </p>
          </div>

          <div className={styles.box}>
            <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
            <h3 className={styles.boxHeader}>
              Język specjalistyczny <br></br>w pracy
            </h3>
            <p className={styles.boxDescription}>
              Kursy języka biznesowego wspierające rozwój zawodowy
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Benefits;
