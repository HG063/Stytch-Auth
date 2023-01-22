import React from "react";
import { Link } from "react-router-dom";
import Stytch from "../Img/Stytch.png";
import "../index.css";

const SignUp = () => {
  return (
    <div className="container">
      <div className="container center-div">
        <img
          alt="Stytch"
          src={Stytch}
          width="70"
          height="70"
          className="mb-1"
        />{" "}
        <h1 className="mb-3">Stytch App</h1>
        <div className="app-wrapper">
          <div className="form-wrapper">
            <h2 className="d-flex justify-content-center">Sign up</h2>
            <form>
              <div className="form-group mb-3">
                <label className="mb-1 d-flex justify-content-start">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email ID"
                  name="email"
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-1 d-flex justify-content-start">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-1 d-flex justify-content-start">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block w-100">
                Sign Up
              </button>
              <p className="forgot-password text-right">
                Already registered? <Link to="/Login">Log In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
