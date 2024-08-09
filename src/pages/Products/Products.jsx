import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Tiramisu from "../../assets/images/tiramisu.jpg";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div class="card w-25 ">
        <img src={Tiramisu} class="card-img-top object-fit-fill" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Tiramisu</h5>
          <p class="card-text">Tiramisu is a cake I guess or an Ice cream</p>
          <a href="#" class="btn btn-primary w-100">
            Add to Cart
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
