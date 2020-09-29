import React from "react";
import Navigation from "./Navigation";
import styles from "./Header.module.scss";
const Header = () => (
  <header className={styles.header}>
    <Navigation />
  </header>
);

export default Header;
