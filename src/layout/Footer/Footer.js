import React from "react";
import styles from "./Footer.module.scss";
const Footer = ({ position }) => {
  return (
    <footer className={styles.footer} style={{ position: position }}>
      © 2020 Sebastian Skóra and Vladyslav Sahaidak | Freelance Web & App
      Developer in Brighton UK
    </footer>
  );
};

export default Footer;
