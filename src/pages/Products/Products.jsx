import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Cards } from "../../components/Cards/Cards";
import "./Products.css";

const Products = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
};

export default Products;
