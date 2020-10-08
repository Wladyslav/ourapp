import React from "react";
import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <thead className={styles.logo}>
      <span style={{ color: "#fff" }}>
        S<span style={{ color: "#909090" }}>S</span>
      </span>
    </thead>
  );
};

export default Logo;
