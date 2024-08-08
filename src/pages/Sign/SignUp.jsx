import React, { useState } from "react";
import signUpImage from "../../assets/images/cupcake.jpg";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const userData = createUserWithEmailAndPassword(auth, email, password);
      const singleUser = userData.user;
      localStorage.setItem("user-data", JSON.stringify(singleUser));
      navigate("/login");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="body">
      <div className="row">
        <div className="col-md-6 position-relative">
          <div className="position-absolute image-text">
            <h2>Get the taste your need</h2>
            <p>
              Sign up and get <span>35% off</span> on muffins
            </p>
          </div>
          <img
            className="object-fit-cover w-100 vh-100"
            src={signUpImage}
            alt=""
          />
        </div>
        <div className="col-md-6 d-flex flex-column p-5 justify-content-between align-items-center">
          <h4 className="w-100 form">Mowli Bakers</h4>
          <div className="w-100 d-flex flex-column form">
            <div className="w-100 d-flex flex-column mb-2">
              <h2 className="mb-2">Sign Up</h2>
              <p className="mb-2">Welcome to Mowli Bakery</p>
            </div>
            <div className="">
              <form onSubmit={submitForm} className="w-100 d-flex flex-column">
                <input
                  className="bg-transparent   py-2  mb-2 "
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className="bg-transparent py-2  mb-3"
                  type="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <div className="">
                  <button type="submit" className="btn btn-secondary w-100 p-2">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <p>
              Already have an account?{" "}
              <a href="/login" className="">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
