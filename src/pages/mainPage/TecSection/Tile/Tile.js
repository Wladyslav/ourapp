import React from "react";
import styles from "./Tile.module.scss";

const Tile = ({ item }) => (
  <div className={styles.tile_container}>
    <div className={styles.tile_img}></div>
    <div className={styles.tile_description}>{item.main_text}</div>
  </div>
);

export default Tile;
