import React, { Component } from "react";
import Button from "../../../../smallComponents/Button/Button";
import styles from "./WordsSlider.module.scss";
class WordsSlider extends Component {
  state = {};

  render() {
    return (
      <div className={styles.mainPage_container}>
        <div className={styles.title_container}>
          <h1 className={styles.mainTitle}>UX DESIGN</h1>
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
