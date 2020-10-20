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
        HTML pozwala opisać strukturę informacji zawartych wewnątrz strony
        internetowej, nadając odpowiednie znaczenie semantyczne poszczególnym
        fragmentom tekstu. JavaScript – skryptowy język programowania, stworzony
        przez firmę Netscape, najczęściej stosowany na stronach internetowych.
        CSS - język służący do opisu formy prezentacji (wyświetlania) stron WWW.
      </div>
    </div>
  );
};
export default PopupHtml;
