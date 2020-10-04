import React from "react";
import styles from "./ClientsOpinionSection.module.scss";
import TextSlider from "./TextSlider/TextSlider";
const ClientsOpinionSection = () => {
  return (
    <section className={styles.clients_opinion_container}>
      <TextSlider />
    </section>
  );
};

export default ClientsOpinionSection;
