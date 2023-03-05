import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Stytch from "../Imgs/Stytch.png";
import "../index.css";
import { schema } from "../Validations/Validation.js";
import { useStytch } from "@stytch/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import NavigationBar from "../Components/NavigationBar.js";

const Login = () => {
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

  const login = (data) => {
    console.log(data);
    setEmail(data.email);
    setPassword(data.password);

    stytchClient.passwords
      .authenticate({ email, password, session_duration_minutes: 60 })
      .then((res) => {
        navigate("/Dashboard");
        console.log("Success:", res);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  const resetPassword = () => {
    stytchClient.passwords.resetByEmailStart({
      email: "harshitgupta063@gmail.com",
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
              <h2 className="d-flex justify-content-center">Sign in</h2>
              <form onSubmit={handleSubmit(login)}>
                <div className="form-group mb-3">
                  <label className="mb-1 d-flex justify-content-start">
                    Email Id
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email Id"
                    {...register("email")}
                    required
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
                    placeholder="Enter password"
                    name="password"
                    autoComplete="on"
                    {...register("password")}
                    required
                  />
                </div>
                {errors.password && (
                  <div className="Red-Validation">
                    {errors.password?.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-block w-100">
                  Login in
                </button>
              </form>
              <p className="forgot-password text-right">
                Forget your password?{" "}
                <Link onClick={resetPassword}>Reset Password</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
