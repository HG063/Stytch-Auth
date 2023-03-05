import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem(
    `${process.env.REACT_APP_PUBLIC_TOKEN_KEY}`
  );
  if (user.length === 4) {
    return false;
  } else {
    return true;
  }
};

const ProtectedRoute = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/Stytch-Auth/Login" />;
};

export default ProtectedRoute;
