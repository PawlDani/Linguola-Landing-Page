import React from "react";
import styles from "./BusinessBenefits.module.scss";
import checkmarkIcon from "../../assets/checkmark.svg";

const businessBenefitsData = [
  {
    header: "Prawdziwe przypadki z branży",
    description:
      "Autentyczne przypadki biznesowe na zajęciach umożliwiają praktyczne zastosowanie języka w kontekście zawodowym. To idealna okazja do rozwinięcia umiejętności komunikacyjnych w prawdziwych sytuacjach biznesowych.",
  },
  {
    header: "Obszerna gama tematów",
    description:
      "Bez względu na obszar biznesu, który Cię interesuje, nasze zajęcia obejmują szeroką gamę tematów. Kursy grupowe przygotują Cię do podjęcia pracy w różnych dziedzinach biznesu.",
  },
  {
    header: "Nacisk na słownictwo branżowe",
    description:
      "Nauka specjalistycznej terminologii pomoże Ci w poszukiwaniu pracy w wymarzonej branży lub w rozwoju dotychczasowej kariery. Zajęcia pomagają zyskać pewność w komunikacji w zakresie własnej specjalizacji.",
  },
];

function BusinessBenefits() {
  return (
    <section className={styles.business} id="business">
      <div className={`${styles.businessContent} container`}>
        <div className={styles.businessHeader}>
          <h1 className={styles.businessHeaderText}>
            Nasze zajęcia z języka biznesowego są wyjątkowe
          </h1>
        </div>
        <div className={styles.businessBenefits}>
          {businessBenefitsData.map((benefit, index) => (
            <div key={index} className={styles.businessBenefitsSingle}>
              <img
                src={checkmarkIcon}
                className={styles.checkmark}
                alt="Checkmark"
              />
              <h2 className={styles.businessBenefitsSingleHeader}>
                {benefit.header}
              </h2>
              <p className={styles.businessBenefitsSingleDescription}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessBenefits;
