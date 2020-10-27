import React, { Component } from "react";
import Button from "../../../../smallComponents/Button/Button";
import styles from "./WordsSlider.module.scss";

const textContent = [
  {
    mainTitle: "RESPONSYWNOŚĆ",
  },
  {
    mainTitle: "NOWOCZESNE TECHNOLOGIE",
  },
  {
    mainTitle: "MOŻLIWOŚĆ ZARZĄDZANIA TREŚCIĄ",
  },
  {
    mainTitle: "APLIKACJE INTERNETOWE",
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
            Tworzenie stron internetowych w dostępnej cenie
          </h3>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Button
            children={"skontaktuj się"}
            secondary={false}
            path={"/contact"}
            router
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
