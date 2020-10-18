import React, { Component } from "react";
import Button from "../../../../smallComponents/Button/Button";
import styles from "./WordsSlider.module.scss";

const textContent = [
  {
    mainTitle: "UX DESIGN",
  },
  {
    mainTitle: "MODERN TECHNOLOGIES",
  },
  {
    mainTitle: "WORDPRESS EXPERT",
  },
  {
    mainTitle: "IOS & ANDROID APPS",
  },
];

class WordsSlider extends Component {
  state = {
    currentTextId: 0,
    animationStart: true,
  };

  startCarousel = () => {
    this.animationInterval = setInterval(() => {
      this.setState((prevState) => ({
        animationStart: !prevState.animationStart,
      }));
    }, 2500);
    this.carouselInterval = setInterval(() => {
      if (this.state.currentTextId < textContent.length - 1) {
        this.setState((prevState) => ({
          currentTextId: prevState.currentTextId + 1,
        }));
      } else {
        this.setState(() => ({
          currentTextId: 0,
        }));
      }
    }, 5000);
  };

  componentDidMount() {
    this.startCarousel();
  }
  componentWillUnmount() {
    clearInterval(this.animationInterval);
    clearInterval(this.carouselInterval);
  }

  render() {
    return (
      <div className={styles.mainPage_container}>
        <div className={styles.title_container}>
          <h1
            className={
              this.state.animationStart
                ? `${styles.mainTitle} ${styles.animated}`
                : styles.mainTitle
            }
          >
            {textContent[this.state.currentTextId].mainTitle}
          </h1>
          <h3 className={styles.subTitle}>
            Freelance Web & App Developer based in Brighton, UK
          </h3>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Button
            children={"skontaktuj się"}
            secondary={false}
            section={"/contact"}
          ></Button>

          <Button secondary section="technology">
            TECHNOLOGIE
          </Button>
        </div>
      </div>
    );
  }
}

export default WordsSlider;
