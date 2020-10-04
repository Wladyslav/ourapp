import React from "react";
import styles from "./TecSection.module.scss";
import Tile from "./Tile/Tile.js";

const items_array = [
  {
    icon: "1",
    main_text: "1",
    link: "",
  },
  {
    icon: "2",
    main_text: "2",
    link: "",
  },
  {
    icon: "3",
    main_text: "3",
    link: "",
  },
  {
    icon: "4",
    main_text: "4",
    link: "",
  },
  {
    icon: "5",
    main_text: "5",
    link: "",
  },
  {
    icon: "6",
    main_text: "6",
    link: "",
  },
];

const TecSection = () => (
  <div className={styles.tec_section_container}>
    <div className={styles.title}>
      <h2>Tecnology</h2>
    </div>
    <div className={styles.tiles_container}>
      {items_array.map((item) => (
        <Tile item={item} />
      ))}
    </div>
  </div>
);
export default TecSection;
