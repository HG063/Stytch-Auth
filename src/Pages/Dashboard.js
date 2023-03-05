import React from "react";
import DashboardNavbar from "../Components/DashboardNavbar";
import Stytch from "../Imgs/Stytch.png";

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="mt-3">
        <img
          alt="Stytch"
          src={Stytch}
          width="70"
          height="70"
          className="mb-1"
        />{" "}
        <h2>Hola, User! Welcome to Stytch Auth App </h2>
      </div>
    </div>
  );
};

export default Dashboard;
