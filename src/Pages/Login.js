import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Stytch from "../Img/Stytch.png";

const Login = () => {
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
            <h2 className="d-flex justify-content-center">Sign in</h2>
            <form>
              <div className="form-group mb-3">
                <label className="mb-1 d-flex justify-content-start">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email Id"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-1 d-flex justify-content-start">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block w-100">
                Login in
              </button>

              <p className="forgot-password text-right">
                Forget your password?{" "}
                <Link to={"/ForgetPassword"}>Reset Password</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
