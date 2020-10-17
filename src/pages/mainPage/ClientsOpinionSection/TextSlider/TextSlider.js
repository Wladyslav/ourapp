import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TextSlider.module.scss";

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
          <h3
            style={{
              color: "#fff",
              textAlign: "center",
              lineHeight: "39px",
              margin: "30px 0",
              fontFamily: "PT Serif, serif",
              fontSize: "24px",
              fontStyle: "italic",
              fontWeight: "100",
            }}
          >
            47.3% światowej populacji kupi coś online w 2020 roku.
          </h3>
        </article>
        {/* <article className={styles.slider_item}></article> */}
        <article className={styles.slider_item}>
          <h3
            style={{
              color: "#fff",
              textAlign: "center",
              lineHeight: "39px",
              margin: "30px 0",
              fontFamily: "PT Serif, serif",
              fontSize: "24px",
              fontStyle: "italic",
              fontWeight: "100",
            }}
          >
            71% kupujących wierzą, że dostaną lepszą ofertę online niż w
            sklepach.
          </h3>
        </article>
        <article className={styles.slider_item}>
          <h3
            style={{
              color: "#fff",
              textAlign: "center",
              lineHeight: "39px",
              margin: "30px 0",
              fontFamily: "PT Serif, serif",
              fontStyle: "italic",
              fontSize: "24px",
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
