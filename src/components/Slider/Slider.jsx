import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { sliderDatas } from "./sliderDatas.js";

const Slider = () => {
  return (
    <Carousel>
      {sliderDatas.map((sliderData, index) => (
        <Carousel.Item key={index}>
          <img className="carousel-image" src={sliderData.image} />
          <Carousel.Caption className="carousel-caption">
            <h1 className="mb-4">{sliderData.heading}</h1>
            <a className="btn ">
              <h6>Buy now</h6>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
