import React, { useEffect } from "react";

import "./App.css";
import Dashboard from "./Routes";
import { getProfile } from "./features/auth/authSlice";
import store from "./app/store";
const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("blog-cms-token");
    store.dispatch(getProfile(token));
  }, []);

  return <Dashboard />;
};

export default App;
