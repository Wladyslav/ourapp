import React from "react";
import styles from "./HeroPage.module.scss";
import WordsSlider from "./WordsSlider/WordsSlider";

const HeroPage = () => {
  return (
    <div className={styles.hero_page}>
      <WordsSlider />
    </div>
  );
};

export default HeroPage;
