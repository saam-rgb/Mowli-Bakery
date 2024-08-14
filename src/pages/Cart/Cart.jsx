import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HorizontalCard from "../../components/Cards/HorizontalCard";

const Cart = ({ cart, setCart }) => {
  return (
    <div id="cart">
      <Navbar />
      <HorizontalCard cart={cart} setCart={setCart} />
    </div>
  );
};

export default Cart;
