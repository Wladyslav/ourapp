import React from "react";
import styles from "./ClientsOpinionSection.module.scss";
import TextSlider from "./TextSlider/TextSlider";
import Fade from "react-reveal/Fade";
const ClientsOpinionSection = () => {
  return (
    <Fade bottom>
      <section className={styles.clients_opinion_container}>
        <TextSlider />
      </section>
    </Fade>
  );
};

export default ClientsOpinionSection;
