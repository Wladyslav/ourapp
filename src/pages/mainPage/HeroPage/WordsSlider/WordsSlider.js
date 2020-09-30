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
    setInterval(() => {
      this.setState((prevState) => ({
        animationStart: !prevState.animationStart,
      }));
    }, 1500);
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
    }, 3000);
  };

  componentDidMount() {
    this.startCarousel();
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
        <div>
          <Button>GET IN TOUCH</Button>
          <Button secondary>RECENT WORK</Button>
        </div>
      </div>
    );
  }
}

export default WordsSlider;
