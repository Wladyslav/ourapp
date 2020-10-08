import React from "react";
import styles from "./Tile.module.scss";

const Tile = ({ img, children }) => (
  <div className={styles.tile_container} style={{ backgroundImage: img }}>
    <div className={styles.tile_img}></div>
    <div className={styles.tile_description}>{children}</div>
  </div>
);

export default Tile;
