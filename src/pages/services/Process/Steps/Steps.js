import React from "react";
import styles from "./Steps.module.scss";

const Steps = ({ icon, text }) => {
  return (
    <div className={styles.steps}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${icon})` }}
      ></div>
      <div className={styles.description}>{text}</div>
    </div>
  );
};

export default Steps;
