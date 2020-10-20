import React from "react";
import styles from "./PopupContent.module.scss";
import img from "../../../../../assets/imgs/react-logo.png";

const PopupReact = () => {
  return (
    <div className={styles.tec_description_wrapper}>
      <div
        className={styles.logo}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.description}>
        <p>
          Jest to biblioteka języka programowania JavaScript, która
          wykorzystywana jest do tworzenia interfejsów graficznych aplikacji
          internetowych. Została stworzona przez Jordana Walke, programistę
          Facebooka. React.js jest obecnie używany na stronach internetowych
          firm takich jak Netflix, Imgur, PayPal, Archive.org, Gamepedia,
          SeatGeek, HelloSign czy Walmart.
        </p>
      </div>
    </div>
  );
};
export default PopupReact;
