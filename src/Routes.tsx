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
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/post/:id"
          element={
            <PrivateRoute>
              <PostDetail />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/new-post"
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          }
        ></Route>
        <Route 
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditPost />
            </PrivateRoute>
          }></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default Dashboard;
