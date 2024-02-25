import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import jwtDecode from "jwt-decode";
// import { decode} from "jsonwebtoken";

export const checkToken = () => {
  const token = localStorage.getItem("blog-cms-token");

  if (token && token !== null) {
    const decodedToken: any = jwtDecode(token);

    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("blog-cms-token");
      return false;
    }

    return true;
  } else {
    return false;
  }
};

const PrivateRoute = () => {
  const auth = checkToken();
  if (!auth) {
    return <Navigate to="/signin" replace />;
  }
  return auth ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
