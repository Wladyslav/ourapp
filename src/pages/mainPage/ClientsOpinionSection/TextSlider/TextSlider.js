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
          <i
            className="fas fa-quote-left"
            style={{
              color: "#fff",
              textAlign: "center",
              width: "100%",
              fontSize: "24px",
            }}
          ></i>
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
            "Finally, a web developer who never disappointed us"
            <br />
            Vladyslaw and Sebastian has always provided good solutions to our
            web challenges, in a timely manner and frequently pro-actively.
          </h3>
        </article>
        <article className={styles.slider_item}>
          <i
            className="fas fa-quote-left"
            style={{
              color: "#fff",
              textAlign: "center",
              width: "100%",
              fontSize: "28px",
            }}
          ></i>
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
            "Vladyslaw and Sebastian are very talented and I would highly
            recommend him to anyone."
            <br />
            Thank you Vladyslaw and Sebastian for all your hard work!
          </h3>
        </article>
      </Slider>
    );
  }
}

export default SimpleSlider;
