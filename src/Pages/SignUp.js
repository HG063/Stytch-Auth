import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Stytch from "../Imgs/Stytch.png";
import "../index.css";
import { useStytch } from "@stytch/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../Validations/Validation.js";
import NavigationBar from "../Components/NavigationBar.js";
import swal from "sweetalert";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const stytchClient = useStytch();

  const signUp = (data) => {
    setEmail(data.email);
    setPassword(data.password);

    stytchClient.passwords
      .strengthCheck({ email, password })
      .then((res) => {
        console.log("Success:", res);
        navigate("/Stytch-Auth/Login");
        swal(
          "Signup Successful!",
          "User Created Successfully, Login to View",
          "success"
        );
      })
      .catch((err) => {
        console.log("Error:", err);
        swal("Signup Unsuccessful!", "Open Console to view the Error", "error");
      });

    stytchClient.passwords.create({
      email,
      password,
      session_duration_minutes: 60,
    });
  };

  return (
    <>
      <NavigationBar />
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
              <form onSubmit={handleSubmit(signUp)}>
                <div className="form-group mb-3">
                  <label className="mb-1 d-flex justify-content-start">
                    Email ID
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email ID"
                    name="email"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <div className="Red-Validation">{errors.email?.message}</div>
                )}

                <div className="form-group mb-3">
                  <label className="mb-1 d-flex justify-content-start">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    autoComplete="on"
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <div className="Red-Validation">
                    {errors.password?.message}
                  </div>
                )}

                <div className="form-group mb-3">
                  <label className="mb-1 d-flex justify-content-start">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    autoComplete="on"
                    {...register("confirmPassword")}
                  />
                </div>
                {errors.confirmPassword && (
                  <div className="Red-Validation">
                    {errors.confirmPassword?.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-block w-100"
                  style={{ paddingTop: "3px" }}>
                  Sign Up
                </button>
              </form>
              <p className="forgot-password text-right">
                Already registered? <Link to="/Stytch-Auth/Login">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
