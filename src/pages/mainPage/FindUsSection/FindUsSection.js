import React from "react";
import Button from "../../../smallComponents/Button/Button";
import styles from "./FindUsSection.module.scss";
import Fade from "react-reveal/Fade";
const FindUsSection = () => {
  return (
    <section className={styles.findUs_section}>
      <Fade bottom>
        <h2 className={styles.main_text}>ZAINTERESOWANY? DOWIEDZ SIĘ WIĘCEJ</h2>
        <div className={styles.buttonsWrapper}>
          <Button
            children={"usługi"}
            secondary={false}
            path={"/services"}
            router
          ></Button>
          <Button
            children={"kontakt"}
            secondary={true}
            path={"/contact"}
            router
          ></Button>
        </div>
      </Fade>
    </section>
  );
};

export default FindUsSection;
