import React, { Component } from "react";
import styles from "./TecSection.module.scss";
import Fade from "react-reveal/Fade";
import Tile from "./Tile/Tile.js";
import JavaScriptImage from "../../../assets/imgs/html-js-css.png";
import ReactImage from "../../../assets/imgs/react-js-blog-header.png";
import WordpressImage from "../../../assets/imgs/WordPresssvg.png";
import NodeJSImage from "../../../assets/imgs/node.png";
import ExpressImage from "../../../assets/imgs/express.jpg";
import MongoDBImage from "../../../assets/imgs/mongodb-logo.png";
import Popup from "./Popup/Popup";

const items_array = [
  {
    icon: ReactImage,
    main_text: "1",
  },
  {
    icon: JavaScriptImage,
    main_text: "2",
  },
  {
    icon: MongoDBImage,
    main_text: "3",
  },
  {
    icon: NodeJSImage,
    main_text: "4",
  },
  {
    icon: ExpressImage,
    main_text: "5",
  },
  {
    icon: WordpressImage,
    main_text: "6",
  },
];

class TecSection extends Component {
  state = {
    isPopupOpen: false,
  };
  handleTogglePopup = () => {
    this.setState((prevState) => ({
      isPopupOpen: !prevState.isPopupOpen,
    }));
  };
  render() {
    return (
      <section id="technology" className={styles.tec_section_container}>
        <Fade bottom>
          <div className={styles.title}>
            <h2>Technologie</h2>
          </div>
          <div className={styles.tiles_container}>
            {items_array.map((item) => (
              <Tile
                key={item.icon}
                img={item.icon}
                handleTogglePopup={this.handleTogglePopup}
              >
                {/* {item.main_text} */}
              </Tile>
            ))}
          </div>
        </Fade>
        <Popup
          isPopupOpen={this.state.isPopupOpen}
          handleTogglePopup={this.handleTogglePopup}
        />
      </section>
    );
  }
}

export default TecSection;
