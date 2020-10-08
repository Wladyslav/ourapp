import React from "react";
import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <small className={styles.logo}>
      <span style={{ color: "#fff" }}>
        S<span style={{ color: "#909090" }}>S</span>
      </span>
    </small>
  );
};

export default Logo;
