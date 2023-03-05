import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stytch from "../Img/Stytch.png";
import "../index.css";
import { useStytch } from "@stytch/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../Validations/Validation.js";

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const stytchClient = useStytch();
  const token = new URLSearchParams(window.location.search).get("token");

  const resetPassword = (data) => {
    data.preventDefault();
    console.log(data);
    setNewPassword(data.target[0].value);
    stytchClient.passwords
      .resetByEmail({
        token,
        password: newPassword,
        session_duration_minutes: 60,
      })
      .then((res) => {
        console.log("Success:", res);
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <>
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
              <h2 className="d-flex justify-content-center">Reset Password</h2>
              <form onSubmit={(e) => resetPassword(e)}>
                <div className="form-group mb-3">
                  <label className="mb-1 d-flex justify-content-start">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter New Password"
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
                    placeholder="Confirm New Password"
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
                  className="btn btn-primary btn-block w-100">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
