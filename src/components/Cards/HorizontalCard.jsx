import React from "react";
import "./Cards.css";

const HorizontalCard = ({ cart, setCart }) => {
  const removeDish = (props) => {
    let removeItems = cart.filter((removeItem) => removeItem.id !== props.id);
    setCart(removeItems);
  };
  return (
    <div className="cards row">
      <div className="card-div px-5 col-md-6 ">
        <h2 className="my-4 ms-4">Cart</h2>
        {cart.map((dish, index) => (
          <div
            className="mb-4 mx-4 p-2 d-flex justify-content-center align-item-center border rounded border-black  "
            key={index}>
            <img
              src={dish.image}
              className="card-img-top object-fit-cover w-25"
              alt={dish.title}
              width="25%"
              height="150px"
            />
            <div className="card-b-css card-body ms-2 ">
              <h5 className="card-title">{dish.title}</h5>
              <h4 className="card-text mb-2 mx-0">₹ {dish.price}</h4>
              <a
                href="#"
                className="btn  w-100"
                onClick={() => {
                  removeDish(dish);
                }}>
                Remove Item
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="col-md-6  border-start  border-dark p-5">
        <h5>Cart List</h5>
        <div className="cart-list">
          {cart.map((dish, index) => (
            <div className="cart-map">
              <div
                className="d-flex justify-content-between border-bottom border-dark mb-2"
                key={index}>
                <h5>{dish.title}</h5>
                <h4>{dish.price}</h4>
              </div>
              <div className="cart-total">
                <h5>Total: </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
