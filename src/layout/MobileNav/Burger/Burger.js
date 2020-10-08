import React from "react";
import styles from "./Burger.module.scss";
const Burger = ({ toggleNav }) => {
  return <div onClick={toggleNav} className={styles.mobileNav_wrapper}></div>;
};

export default Burger;
