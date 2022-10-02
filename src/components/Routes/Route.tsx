// import { checkToken } from "Helpers/auth";
import React, { Fragment, useEffect } from "react";
import { Route, RouteProps, useNavigate } from "react-router-dom";
// import { Routes } from "Utils";
import jwtDecode from "jwt-decode";

export const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token && token !== null) {
    const decodedToken: any = jwtDecode(token);
    if (decodedToken?.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  } else {
    return false;
  }
};

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component?: any;
  isSignedIn?: boolean;
  children?: any;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  const history = useNavigate();
  const auth = checkToken();
  useEffect(() => {
    if (!auth) {
      //   history.push(Routes.Login);
      history("/signin");
    }
  }, []);
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
};

export default PrivateRoute;
