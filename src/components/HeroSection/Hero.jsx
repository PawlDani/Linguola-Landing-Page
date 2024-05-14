import React from "react";
import styles from "./Hero.module.scss";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Buttons/Button";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className={styles.heroWrapper}>
      <article className={styles.hero}>
        <div className={`${styles.heroContainer} container`}>
          <div className={styles.heroContent}>
            <h1 className="upperText">{t("hero.challenge")}</h1>
            <p>{t("hero.startsHere")}</p>
            <ScrollLink
              to="programs"
              className={styles.heroButton}
              smooth={true}
              duration={1500}
              offset={-100}
            >
              <Button variant="primary">{t("hero.offer")}</Button>
            </ScrollLink>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Hero;
