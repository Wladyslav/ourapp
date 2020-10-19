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
    id: 1,
    icon: ReactImage,
  },
  {
    id: 2,
    icon: JavaScriptImage,
  },
  {
    id: 3,
    icon: MongoDBImage,
  },
  {
    id: 4,
    icon: NodeJSImage,
  },
  {
    id: 5,
    icon: ExpressImage,
  },
  {
    id: 6,
    icon: WordpressImage,
  },
];

class TecSection extends Component {
  state = {
    isPopupOpen: false,
    itemId: 0,
  };
  handlePopupClose = () => {
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
                handlePopupOpen={() => {
                  this.setState((prevState) => ({
                    itemId: item.id,
                    isPopupOpen: !prevState.isPopupOpen,
                  }));
                }}
              >
                {/* {item.main_text} */}
              </Tile>
            ))}
          </div>
        </Fade>
        <Popup
          isPopupOpen={this.state.isPopupOpen}
          handlePopupClose={this.handlePopupClose}
          currentID={this.state.itemId}
        />
      </section>
    );
  }
}

export default TecSection;
