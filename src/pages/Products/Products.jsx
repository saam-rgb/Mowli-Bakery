import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Cards } from "../../components/Cards/Cards";

const Products = ({ cart, setCart }) => {
  return (
    <div id="product">
      <Navbar />
      <Cards cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
};

export default Products;
