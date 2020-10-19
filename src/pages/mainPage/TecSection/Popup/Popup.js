import React from "react";
import styles from "./Popup.module.scss";
import { AiFillCloseSquare } from "react-icons/ai";
const Popup = ({ isPopupOpen, handleTogglePopup }) => {
  return (
    <div
      className={
        isPopupOpen
          ? `${styles.popup_overlay} ${styles.open}`
          : `${styles.popup_overlay}`
      }
    >
      <div className={styles.popup_container}>
        <div onClick={handleTogglePopup} className={styles.close_icon}>
          <AiFillCloseSquare />
        </div>
      </div>
    </div>
  );
};
export default Popup;
