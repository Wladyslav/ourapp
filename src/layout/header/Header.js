import React from "react";
import styles from "../header/Header.module.scss";
import Navigation from "../navigation/Navigation.js";
import Example from "../mobileNav/Example";

const Header = () => (
  <header className={styles.header}>
    <Example />
    <Navigation />
  </header>
);

export default Header;
