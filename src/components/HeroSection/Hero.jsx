import React from "react";
import styles from "./Hero.module.scss";
import Button from "../Buttons/Button";

function Hero() {
  return (
    <section id="hero" className={styles.heroWrapper}>
      <article className={styles.hero}>
        <div className={`${styles.heroContainer} container`}>
          <div className={styles.heroContent}>
            <h1 className="upperText">Twoje językowe wyzwanie</h1>
            <p>zaczyna się tutaj!</p>
            <Button
              variant="primary"
              onClick={() => (window.location.href = "#programs")}
            >
              OFERTA
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Hero;
