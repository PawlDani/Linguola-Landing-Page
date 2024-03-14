import React from "react";
import styles from "./Hero.module.scss";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Buttons/Button";

function Hero() {
  return (
    <section id="hero" className={styles.heroWrapper}>
      <article className={styles.hero}>
        <div className={`${styles.heroContainer} container`}>
          <div className={styles.heroContent}>
            <h1 className="upperText">Twoje językowe wyzwanie</h1>
            <p>zaczyna się tutaj!</p>
            <ScrollLink
              to="programs"
              className={styles.heroButton}
              smooth={true}
              duration={1500}
              offset={-100}
            >
              <Button variant="primary">OFERTA</Button>
            </ScrollLink>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Hero;
