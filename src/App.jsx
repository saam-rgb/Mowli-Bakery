import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Sign/SignUp";
import Login from "./pages/Sign/Login";
import About from "./pages/About/About";
import Products from "./pages/Products/Products.jsx";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { Cards } from "./components/Cards/Cards";
import { useState } from "react";
import HorizontalCard from "./components/Cards/HorizontalCard";
import * as $ from "jquery";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="about" element={<About />} />
          <Route
            path="products"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
          {/* <Route element={<Cards cart={cart} setCart={setCart} />} />
          <Route element={<HorizontalCard cart={cart} setCart={setCart} />} /> */}
          <Route path="/products/${category}/${product_name}"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
