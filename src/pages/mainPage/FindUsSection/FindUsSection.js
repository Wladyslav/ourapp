import React from "react";
import Button from "../../../smallComponents/Button/Button";
import styles from "./FindUsSection.module.scss";
import Fade from "react-reveal/Fade";
const FindUsSection = () => {
  return (
    <section className={styles.findUs_section}>
      <Fade bottom>
        <h2 className={styles.main_text}>INTERESTED? FIND OUT MORE</h2>
        <div className={styles.buttonsWrapper}>
          <Button>SERVICES</Button>
          <Button secondary>CONTACT</Button>
        </div>
      </Fade>
    </section>
  );
};

export default FindUsSection;
