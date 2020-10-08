import React from "react";
import styles from "./MobileNavElements.module.scss";
import { NavLink } from "react-router-dom";
const MobileNavElements = () => {
  return (
    <ul className={styles.mobileNavElements}>
      <li className={styles.navItem}>
        <NavLink
          exact
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/"
        >
          Strona główna
        </NavLink>
      </li>
      <li className={styles.navItem}>
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
