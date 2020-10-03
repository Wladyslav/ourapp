import React from "react";
import styles from "./ClientsOpinionSection.module.scss";
import TextSlider from "./TextSlider/TextSlider";
const ClientsOpinionSection = () => {
  return (
    <div className={styles.clients_opinion_container}>
      <TextSlider />
    </div>
  );
};

export default ClientsOpinionSection;
