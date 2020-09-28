import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss'

const Navigation = ()=>
(
    <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink exact activeClassName={styles.itemLinkActive} className={styles.itemLink} to="/">
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

export default Navigation;