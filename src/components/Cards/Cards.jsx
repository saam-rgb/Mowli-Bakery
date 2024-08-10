import React from "react";
import menu from "../../pages/Products/products";

export const Cards = ({ cart, setCart }) => {
  return (
    <div className="card-div m-5 row d-flex justify-content-center">
      {menu.map((dish, index) => (
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
            {console.log(dish.title)}
            {console.log(cart)}
            <button
              className="btn btn-primary w-100"
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
