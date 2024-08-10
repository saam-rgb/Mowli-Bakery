import React from "react";

const HorizontalCard = ({ cart, setCart }) => {
  const removeDish = (props) => {};
  return (
    <div className="card-div m-5 row d-flex justify-content-center">
      {cart?.map((dish, index) => (
        <div className="card  mb-4 mx-4 col-md-3" key={index}>
          <img
            src={dish.image}
            className="card-img-top object-fit-fill"
            alt={dish.title}
            width="100%"
          />
          <div className="card-body">
            <h5 className="card-title">{dish.title}</h5>
            <p className="card-text">{dish.description}</p>
            <a
              href="#"
              className="btn btn-primary w-100"
              onClick={() => {
                removeDish(dish);
              }}>
              Add to Cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCard;
