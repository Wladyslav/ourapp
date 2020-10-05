import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, secondary, section }) => {
  return (
    <>
      <button
        className={
          secondary ? `${styles.mainBtn} ${styles.secondary}` : styles.mainBtn
        }
      >
        <a href={section}>{children}</a>
      </button>
    </>
  );
};

export default Button;
