import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const location = useLocation();
  // const pathComingFrom = location.state?.from?.pathname || "/";
  // console.log("pathComingFrom: ", pathComingFrom);
  console.log("PvtRoute: ", location);
  return isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} state={{from: location}} replace={true} />
  );
};
