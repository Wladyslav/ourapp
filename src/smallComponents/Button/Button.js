import React from "react";
import styles from "./Button.module.scss";
const Button = ({ children, secondary }) => {
  return (
    <button
      style={{
        backgroundColor: secondary ? "#fff" : "transparent",
        color: secondary ? "black" : "white",
        border: "1px solid white",
        padding: "10px",
        fontWeight: "700",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
