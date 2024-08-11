import React from "react";
import { reviewDatas } from "./reviewDatas";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="d-flex m-4 ">
      {reviewDatas.map((reviewData) => (
        <div className="rev-container p-4 border border-dark-subtle m-2 rounded w-25">
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
    </div>
  );
};

export default Reviews;
