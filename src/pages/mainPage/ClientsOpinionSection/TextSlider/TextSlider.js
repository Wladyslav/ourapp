import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TextSlider.module.scss";

import LaptopPNG from "../../../../assets/svgs/laptop.png";
import WebPNG from "../../../../assets/svgs/web.png";
import BasketPNG from "../../../../assets/svgs/basket.png";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} autoplay="true" className={styles.slider_container}>
        <article className={styles.slider_item}>
          <div className={styles.icon}>
            <img
              style={{ height: "170px", width: "170px" }}
              src={BasketPNG}
              alt=""
            />
          </div>
          <h3
            className={styles.text}
            style={{
              color: "#fff",
              textAlign: "center",

              margin: "30px 10px",
              fontFamily: "PT Serif, serif",

              fontStyle: "italic",
              fontWeight: "100",
            }}
          >
            47.3% światowej populacji kupi coś online w 2020 roku.
          </h3>
        </article>
        <article className={styles.slider_item}>
          <div className={styles.icon}>
            <img
              style={{ height: "170px", width: "170px" }}
              src={LaptopPNG}
              alt=""
            />
          </div>
          <h3
            style={{
              color: "#fff",
              textAlign: "center",

              margin: "30px 0",
              fontFamily: "PT Serif, serif",

              fontStyle: "italic",
              fontWeight: "100",
            }}
          >
            71% kupujących wierzą, że dostaną lepszą ofertę online niż w
            sklepach.
          </h3>
        </article>
        <article className={styles.slider_item}>
          <div className={styles.icon}>
            <img
              style={{ height: "170px", width: "170px" }}
              src={WebPNG}
              alt=""
            />
          </div>
          <h3
            style={{
              color: "#fff",
              textAlign: "center",

              margin: "30px 0",
              fontFamily: "PT Serif, serif",
              fontStyle: "italic",

              fontWeight: "100",
            }}
          >
            Ile stron jest w 2020? W styczniu 2020 było ponad 1.74 miliarda
            stron internetowych w Internecie.
          </h3>
        </article>
      </Slider>
    );
  }
}

export default SimpleSlider;
