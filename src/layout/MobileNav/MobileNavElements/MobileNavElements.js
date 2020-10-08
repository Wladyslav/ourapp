import React from "react";
import styles from "./MobileNavElements.module.scss";
import { NavLink } from "react-router-dom";
const MobileNavElements = ({ isOpen }) => {
  return (
    <ul
      className={styles.mobileNavElements}
      style={{
        height: isOpen ? "20vh" : "0vh",
      }}
    >
      <li className={styles.navItem} style={{ opacity: isOpen ? "1" : "0" }}>
        <NavLink
          exact
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/"
        >
          Strona główna
        </NavLink>
      </li>
      <li className={styles.navItem} style={{ opacity: isOpen ? "1" : "0" }}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/contact"
        >
          Kontakt
        </NavLink>
      </li>
    </ul>
  );
};

export default MobileNavElements;
