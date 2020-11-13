import React from "react";
import styles from "./Steps.module.scss";

const Steps = ({number, icon, text }) => {
  return (
    <div className={styles.steps}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${icon})` }}
      ></div>
      <div className={styles.description}><span style={{color: "black", width: "26px", height: "26px",marginRight: "0px", borderRadius: "50%", backgroundColor: "#bfa67a", display:"flex", justifyContent: "center", alignItems: "center"}}>{number}</span> {text}</div>
    </div>
  );
};

export default Steps;
