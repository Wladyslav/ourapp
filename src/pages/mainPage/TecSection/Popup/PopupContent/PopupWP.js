import React from "react";
import styles from "./PopupContent.module.scss";
import img from "../../../../../assets/imgs/wp.png";

const PopupWordPress = () => {
  return (
    <div className={styles.tec_description_wrapper}>
      <div
        className={styles.logo}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.description}>
        Napisany w języku PHP system zarządzania treścią (CMS) zaprojektowany
        głównie do obsługi blogów. Wykorzystuje bazę danych MySQL. Według danych
        W3Techs, firmy analizującej rynek IT, w maju 2018 aż 30,7% stron na
        świecie pracowało w oparciu o Wordpress. Z kolei wśród systemów
        zarządzania treścią WordPress miał udział na poziomie 59,9% - czyli był
        najpopularniejszym CMS na świecie.
      </div>
    </div>
  );
};
export default PopupWordPress;
