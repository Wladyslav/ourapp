import React from "react";
import styles from "./Footer.module.scss";
const Footer = ({ position }) => {
  return (
    <footer className={styles.footer} style={{ position: position }}>
      © 2020 Sebastian Skóra and Władysław Sahaidak | Freelance Web & App
      Developer
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixelmeetup"
          title="Pixelmeetup"
        >
          Pixelmeetup
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
