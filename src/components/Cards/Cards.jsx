import React from "react";
import menu from "../../pages/Products/products";
import "./Cards.css";

export const Cards = ({ cart, setCart }) => {
  return (
    <div className="card-div p-5 row d-flex justify-content-center">
      {menu.map((dish, index) => (
        <div className=" mb-4 mx-4 col-md-3" key={index}>
          <img
            src={dish.image}
            className="card-img-top object-fit-cover mb-3"
            alt={dish.title}
            width="100%"
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title mb-2">{dish.title}</h5>
            <p className="card-text mb-2">{dish.description}</p>
            <h4 className="card-text mb-2">{dish.price}</h4>
            {console.log(dish.title)}
            {console.log(cart)}
            <button
              className="btn  w-100 mb-3"
              onClick={() => setCart([...cart, dish])}>
              Add to Cart
            </button>
            {console.log(cart)}
          </div>
        </div>
      ))}
      {console.log(cart)}
    </div>
  );
};

// export default Cards;
