import React from "react";
import styles from "./Logo.module.scss";
import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
  return (
    <small
      className={styles.logo}
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <span style={{ color: "#fff", cursor: "pointer" }}>
        S<span style={{ color: "#909090" }}>W</span>
      </span>
    </small>
  );
};

export default Logo;
