import React from "react";
import styles from "./IndividualBenefits.module.scss";
import checkmarkIcon from "../../assets/checkmark.svg"; 

function IndividualBenefits() {
  return (
    <section className={styles.individual} id="individual">
      <div className={`${styles.individualContent} container`}>
        <div className={styles.individualHeader}>
          <h1 className={styles.individualHeaderText}>
            Czym wyróżniają się zajęcia indywidualne
          </h1>
        </div>
        <div className={styles.individualBenefits}>
          {benefitsData.map((benefit, index) => (
            <div key={index} className={styles.individualBenefitsSingle}>
              <img
                src={checkmarkIcon}
                className={styles.checkmark}
                alt="Checkmark"
              />
              <h2 className={styles.individualBenefitsSingleHeader}>
                {benefit.header}
              </h2>
              <p className={styles.individualBenefitsSingleDescription}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefitsData = [
  {
    header: "Spersonalizowane podejście",
    description:
      "Twój nauczyciel dostosuje program do Twoich konkretnych celów i poziomu zaawansowania. Każda lekcja będzie zgodna z Twoimi oczekiwaniami.",
  },
  {
    header: "Elastyczny harmonogram",
    description:
      "Kursy indywidualne dostosowują się do Twojego tempa życia. Umów się na lekcje zgodnie z własnym harmonogramem, aby nauka była wygodna i efektywna.",
  },
  {
    header: "Rozwinięcie umiejętności",
    description:
      "Niezależnie od tego, czy chcesz osiągnąć doskonałą gramatykę, biegle się porozumiewać, czy zdobyć ważny certyfikat językowy - kurs indywidualny pomoże osiągnąć Ci twoje cele.",
  },
];

export default IndividualBenefits;
