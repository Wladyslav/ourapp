import React from "react";
import styles from "./PopupContent.module.scss";
import img from "../../../../../assets/imgs/express-js.png";

const PopupExpress = () => {
  return (
    <div className={styles.tec_description_wrapper}>
      <div
        className={styles.logo}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.description}>
        Express to popularny framework webowy stworzony w języku JavaScript
        działający w środowisku uruchomieniowym Node.js.
      </div>
    </div>
  );
};
export default PopupExpress;
