import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/signin/SignIn";
import Home from "./components/home/Home";
import Navbar from "./components/home/Navbar/Navbar";
import CreatePost from "./components/home/Posts/CreatePost";
import EditPost from "./components/home/Posts/EditPost";
import PostDetail from "./components/home/Posts/PostDetail";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/Routes/Route";
function Dashboard() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/post/:id" element={<PostDetail />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/new-post" element={<CreatePost />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default Dashboard;
