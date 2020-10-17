import React from "react";
import styles from "./TecSection.module.scss";
import Fade from "react-reveal/Fade";
import Tile from "./Tile/Tile.js";
import JavaScriptImage from "../../../assets/imgs/javascript.jpg";
import ReactImage from "../../../assets/imgs/react.png";
import WordpressImage from "../../../assets/imgs/wordpress.png";
import NodeJSImage from "../../../assets/imgs/nodejs.png";
import ExpressImage from "../../../assets/imgs/express.jpg";
import MongoDBImage from "../../../assets/imgs/mongodb.png";
const items_array = [
  {
    icon: JavaScriptImage,
    main_text: "1",
    link: "",
  },
  {
    icon: ReactImage,
    main_text: "2",
    link: "",
  },
  {
    icon: WordpressImage,
    main_text: "3",
    link: "",
  },
  {
    icon: NodeJSImage,
    main_text: "4",
    link: "",
  },
  {
    icon: ExpressImage,
    main_text: "5",
    link: "",
  },
  {
    icon: MongoDBImage,
    main_text: "6",
    link: "",
  },
];

const TecSection = () => (
  <section id="technology" className={styles.tec_section_container}>
    <Fade bottom>
      <div className={styles.title}>
        <h2>Technologie</h2>
      </div>
      <div className={styles.tiles_container}>
        {items_array.map((item) => (
          <Tile img={item.icon} key={item.icon}>
            {/* {item.main_text} */}
          </Tile>
        ))}
      </div>
    </Fade>
  </section>
);
export default TecSection;
