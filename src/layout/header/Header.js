import React from "react";
import styles from "../header/Header.module.scss";
import Navigation from "../navigation/Navigation.js";
import Logo from "../Logo/Logo";
//import Burger from "../mobileNav/Burger/Burger";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <MobileNav />
    <Navigation />
  </header>
);

export default Header;
