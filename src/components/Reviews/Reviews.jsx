import React from "react";
import { reviewDatas } from "./reviewDatas";
import "./Reviews.css";
import OwlCarousel from "react-owl-carousel";

const Reviews = () => {
  const options = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 2,
        nav: true,
        loop: true,
      },
    },
  };
  return (
    <div className="d-flex m-4 ">
      <OwlCarousel className="owl-carousel " {...options}>
        {reviewDatas.map((reviewData, index) => (
          <div
            className="rev-container p-4 border border-dark-subtle m-2 rounded w-25"
            key={index}>
            <div className="head d-flex mb-3">
              <img
                src={reviewData.image}
                alt={reviewData.name}
                className="rounded-circle  object-fit-cover me-3"
              />
              <div className="title">
                <h5>{reviewData.name}</h5>
                <p>{reviewData.rating}</p>
              </div>
            </div>
            <div className="desc">
              <p>{reviewData.description}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Reviews;
