import React from "react";
import styles from "./Tile.module.scss";

const Tile = ({ img, children }) => (
  <div className={styles.tile_container}>
    <img src={img} alt="" style={{width: "100%", height: "100%"}}/>
    <div className={styles.tile_img}></div>
    <div className={styles.tile_description}>{children}</div>
  </div>
);

export default Tile;
