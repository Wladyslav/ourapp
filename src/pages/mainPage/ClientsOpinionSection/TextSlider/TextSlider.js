import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <Slider {...settings} autoplay="true" adaptiveHeight="true">
        <div>
          <h3 style={{ color: "red" }}>DSJADOIA</h3>
        </div>
        <div>
          <h3 style={{ color: "red" }}>HELLO</h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
