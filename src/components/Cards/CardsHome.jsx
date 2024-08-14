import React from "react";
import { Specials } from "../../pages/Products/Detail";
import "./Cards.css";

export const CardsHome = ({ cart, setCart }) => {
  return (
    <div className="card-container px-2">
      <h2 className="py-4 ps-4">Specials</h2>
      <div className="  row d-flex justify-content-center">
        {Specials.map((dish, index) => (
          <div className=" mb-4 mx-4 col-md-2 col-sm-6 " key={index}>
            <img
              src={dish.image}
              className="card-img-top object-fit-cover mb-3"
              alt={dish.title}
              width="25%"
              height="150px"
            />
            <div className="card-body">
              <h5 className="card-title mb-2">{dish.title}</h5>

              <h4 className="card-text mb-2">₹ {dish.price}</h4>
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
    </div>
  );
};

// export default Cards;
