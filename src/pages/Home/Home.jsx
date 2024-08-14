import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Reviews from "../../components/Reviews/Reviews";
import "./Home.css";
import { CardsHome } from "../../components/Cards/CardsHome";

const Home = ({ cart, setCart }) => {
  return (
    <div id="home">
      <Navbar />
      <Slider />
      <CardsHome cart={cart} setCart={setCart} />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
