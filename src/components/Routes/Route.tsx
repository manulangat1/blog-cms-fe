// import { checkToken } from "Helpers/auth";
import React, { Fragment, useEffect } from "react";
import {
  Navigate,
  Route,
  RouteProps,
  useNavigate,
  redirect,
} from "react-router-dom";
// import { Routes } from "Utils";
import jwtDecode from "jwt-decode";

export const checkToken = () => {
  const token = localStorage.getItem("blog-cms-token");
  console.log(token);
  console.log("first", token !== "undefined");
  console.log("second", token !== null);
  console.log("third", token !== undefined);
  if (token !== null) {
    return true;
  } else {
    return false;
  }
};

interface PrivateRouteProps {
  // tslint:disable-next-line:no-any
  component?: any;
  isSignedIn?: boolean;
  children?: any;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = checkToken();
  console.log("am i auth", auth);
  console.log("my auth status");
  if (!auth) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRoute;
