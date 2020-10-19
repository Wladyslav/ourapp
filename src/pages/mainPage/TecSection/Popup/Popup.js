import React from "react";
import styles from "./Popup.module.scss";
import { AiFillCloseSquare } from "react-icons/ai";
import PopupReact from "./PopupContent/PopupReact";
import PopupHtml from "./PopupContent/PopupHtml";
import PopupMongo from "./PopupContent/PopupMongo";
import PopupNode from "./PopupContent/PopupNode";
import PopupExpress from "./PopupContent/PopupExpress";
import PopupWordPress from "./PopupContent/PopupWP";

const renderSwitch = (currentID) => {
  switch (currentID) {
    case 1:
      return <PopupReact />;

    case 2:
      return <PopupHtml />;
    case 3:
      return <PopupMongo />;
    case 4:
      return <PopupNode />;
    case 5:
      return <PopupExpress />;
    case 6:
      return <PopupWordPress />;

    default:
      return <PopupReact />;
  }
};

const Popup = ({ isPopupOpen, handlePopupClose, currentID }) => {
  return (
    <div
      className={
        isPopupOpen
          ? `${styles.popup_overlay} ${styles.open}`
          : `${styles.popup_overlay}`
      }
    >
      <div className={styles.popup_container}>
        <div onClick={handlePopupClose} className={styles.close_icon}>
          <AiFillCloseSquare />
        </div>
        {renderSwitch(currentID)}
        {console.log(currentID)}
      </div>
    </div>
  );
};
export default Popup;
