import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
