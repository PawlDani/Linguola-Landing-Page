import React from "react";
import styles from "./GroupBenefits.module.scss";
import checkmarkIcon from "../../assets/checkmark.svg";

const groupBenefitsData = [
  {
    header: "Małe grupy, duże korzyści",
    description:
      "Nasze grupy 4-5 osobowe pozwalają na bardziej indywidualne podejście nauczyciela do każdego uczestnika. Współpraca w małej społeczności sprzyja szybszemu przyswajaniu materiału.",
  },
  {
    header: "Grupa motywujących się uczniów",
    description:
      "Nasze kursy to nie tylko słuchanie wykładów, ale przede wszystkim aktywne uczestnictwo. Ćwiczenia grupowe, gry językowe i role-play sprawią, że nauka stanie się ciekawą interakcją.",
  },
  {
    header: "Materiały do pracy własnej",
    description:
      "Oferujemy bogaty zestaw materiałów, które umożliwiają samodzielną pracę poza zajęciami. To idealna okazja do utrwalenia wiedzy i rozwinięcia umiejętności w własnym tempie.",
  },
];

function GroupBenefits() {
  return (
    <section className={styles.group} id="group">
      <div className={`${styles.groupContent} container`}>
        <div className={styles.groupHeader}>
          <h1 className={styles.groupHeaderText}>
            Czym wyróżniają się kursy grupowe
          </h1>
        </div>
        <div className={styles.groupBenefits}>
          {groupBenefitsData.map((benefit, index) => (
            <div key={index} className={styles.groupBenefitsSingle}>
              <img
                src={checkmarkIcon}
                className={styles.checkmark}
                alt="Checkmark"
              />
              <h2 className={styles.groupBenefitsSingleHeader}>
                {benefit.header}
              </h2>
              <p className={styles.groupBenefitsSingleDescription}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GroupBenefits;
