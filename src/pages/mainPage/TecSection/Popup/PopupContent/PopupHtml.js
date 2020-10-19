import React from "react";
import styles from "./PopupContent.module.scss";
import img from "../../../../../assets/imgs/html-js-css.png";

const PopupHtml = () => {
  return (
    <div className={styles.tec_description_wrapper}>
      <div
        className={styles.logo}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, unde.
        Omnis possimus quisquam nulla impedit. Fugit, ea provident quisquam
        repudiandae sapiente dolorum sequi excepturi at itaque quia vel eveniet
        sed.
      </div>
    </div>
  );
};
export default PopupHtml;
