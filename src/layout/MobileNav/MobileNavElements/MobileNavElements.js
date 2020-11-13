import React from "react";
import styles from "./MobileNavElements.module.scss";
import { NavLink } from "react-router-dom";
const MobileNavElements = ({ isOpen, toggleNav }) => {
  return (
    <ul
      className={styles.mobileNavElements}
      style={{
        height: isOpen ? "30vh" : "0vh",
      }}
    >
      <li className={styles.navItem} style={{ opacity: isOpen ? "1" : "0" }}>
        <NavLink
          exact
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/"
          onClick={toggleNav}
        >
          Strona główna
        </NavLink>
      </li>
      <li className={styles.navItem} style={{ opacity: isOpen ? "1" : "0" }}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/services"
          onClick={toggleNav}
        >
          Uslugi
        </NavLink>
      </li>
      <li className={styles.navItem} style={{ opacity: isOpen ? "1" : "0" }}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/contact"
          onClick={toggleNav}
        >
          Kontakt
        </NavLink>
      </li>
    </ul>
  );
};

export default MobileNavElements;
