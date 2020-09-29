import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, secondary }) => {
  return (
    <>
      <button
        className={
          secondary ? `${styles.mainBtn} ${styles.secondary}` : styles.mainBtn
        }
      >
        {children}
      </button>
    </>
  );
};

export default Button;
