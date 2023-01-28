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
  // useEffect(() => {
  //   const auth = checkToken();
  // }, [localStorage.getItem("token")]);
  const auth = checkToken();
  console.log("am i auth", auth);
  console.log("my auth status");
  if (!auth) {
    return <Navigate to="/signin" replace />;
  }

  return children;
  // return auth ? children : redirect("/signin");
};

// const PrivateRoute = ({ children }: PrivateRouteProps) => {
//   const token = JSON.parse(localStorage.getItem("token") || "{}");
//   const history = useNavigate();
//   const auth = checkToken();
//   useEffect(() => {
//     if (!auth) {
//       //   history.push(Routes.Login);
//       history("/signin");
//     }
//   }, []);
//   return (
//     <Fragment>
//       <main>{children}</main>
//     </Fragment>
//   );
// };

export default PrivateRoute;
