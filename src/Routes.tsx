import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/signin/SignIn";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/Routes/Route";
function Dashboard() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default Dashboard;
