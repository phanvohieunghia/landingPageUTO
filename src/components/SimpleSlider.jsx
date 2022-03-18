import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    const sliderData = [
      {
        image: '1'
      },
      {
        image: '2'
      },
      {
        image: '3'
      },
    ]
    return (
      <div>
        <Slider {...settings} className="slider2">
        {sliderData.map((slide, index) => {
          return (
            <div className="slider2__slide" key={index}>
              <img src={require("../assets/img/banner" + slide.image + ".jpg")} alt="dont show" className="slider2__img" />
            </div>
          )
        })}
        </Slider>
      </div>
    );
  }
}