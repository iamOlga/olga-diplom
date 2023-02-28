import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from "./Images/sun.png"
import slide2 from "./Images/venus.png"
import slide3 from "./Images/mars.png"
import slide4 from "./Images/saturn.png"
import slide5 from "./Images/neptune.png"
import slide6 from "./Images/uranus.png"
import slide7 from "./Images/jupiter.png"
import slide8 from "./Images/earth.png"
import slide9 from "./Images/mercury.png"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './dist/Slider.css'

export default class CenterMode extends Component {
    render() {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        variableWidth: true,
        arrows: false,
        speed: 500
      };
      return (
        <div className="slider">
          <h2>Солнечная система</h2>
          <Slider {...settings}>
            <div className="slider__item">
                <h4>the Sun</h4>
                <img className="planet_img" src={slide1} />
            </div>
            <div className="slider__item">
                <h4>the Venus</h4>
                <img className="planet_img" src={slide2} />
            </div>
            <div className="slider__item">
                <h4>the Mars</h4>
                <img className="planet_img" src={slide3} />
            </div>
            <div className="slider__item">
                <h4>the Saturn</h4>
                <img className="planet_img" src={slide4} />
            </div>
            <div className="slider__item">
                <h4>the Neptune</h4>
                <img className="planet_img" src={slide5} />
            </div>
            <div className="slider__item">
                <h4>the Uranus</h4>
                <img className="planet_img" src={slide6} />
            </div>
            <div className="slider__item">
                <h4>the Jupiter</h4>
                <img className="planet_img" src={slide7} />
            </div>
            <div className="slider__item">
                <h4>the Earth</h4>
                <img className="planet_img" src={slide8} />
            </div>
            <div className="slider__item" >
                <h4>the Mercury</h4>
                <img className="planet_img" src={slide9} />
            </div>
          </Slider>
        </div>
      );
    }
  }
