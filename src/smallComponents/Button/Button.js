import React from "react";
import styles from "./Button.module.scss";
import {Link} from 'react-scroll';
const Button = ({ children, secondary, section }) => {
  return (
    <>
      <button
        className={
          secondary ? `${styles.mainBtn} ${styles.secondary}` : styles.mainBtn
        }
      >
        <Link
        style={{
          width: "185px",
          height: "50px"
        }}
          to={section}
          className={
            secondary
              ? `${styles.mainHref} ${styles.secondaryHref}`
              : styles.mainHref
          }
          smooth={true}
          duration={1000}
        
        >
          {children}
        </Link>
      </button>
    </>
  );
};

export default Button;
