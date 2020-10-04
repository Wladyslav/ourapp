import React from "react";
import Button from "../../../smallComponents/Button/Button";
import styles from "./FindUsSection.module.scss";
const FindUsSection = () => {
  return (
    <section className={styles.findUs_section}>
      <h2 className={styles.main_text}>INTERESTED? FIND OUT MORE</h2>
      <div className={styles.buttonsWrapper}>
        <Button>SERVICES</Button>
        <Button secondary>CONTACT</Button>
      </div>
    </section>
  );
};

export default FindUsSection;
