import React from "react";
import styles from "../header/Header.module.scss";
import Navigation from "../navigation/Navigation.js";
import Example from "../mobileNav/Example";
import Logo from "../Logo/Logo";

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <Example />
    <Navigation />
  </header>
);

export default Header;
