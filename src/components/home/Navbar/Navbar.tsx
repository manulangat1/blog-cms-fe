import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../../../app/store";
import { redirect, useNavigate, Link, NavLink } from "react-router-dom";
import { reset } from "../../../features/auth/authSlice";
import { Button } from "@mui/material";
function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    await localStorage.removeItem("blog-cms-token");
    await dispatch(reset());
    navigate("/signin");
    return redirect("/signin");
  };
  return (
    <AppBar
      style={{
        height: "80px",
        justifyContent: "center",
        background: "#17252A",
      }}
      position="static"
    >
      <Toolbar
        style={{
          justifyContent: "center",
        }}
        variant="dense"
      >
        <Typography variant="h6" color="inherit" component="div">
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/"
          >
            Blog cms
          </NavLink>
        </Typography>
        {/* <Typography
          variant="h6"
          color="inherit"
          component="div"
          style={{
            color: "#AAABB8",
          }}
        >
          Blog cms
        </Typography> */}
        <div style={{ flexGrow: "1", flexDirection: "row" }}></div>
        {/* <div> */}
        {isAuthenticated && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Typography variant="h6" color="inherit" component="div">
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/"
              >
                Home
              </NavLink>
            </Typography>
            <Button
              onClick={() => navigate("/new-post")}
              style={{ marginLeft: "2rem", color: "white" }}
            >
              {" "}
              New post{" "}
            </Button>

            {isAuthenticated ? (
              <Button
                style={{ marginLeft: "2rem" }}
                onClick={handleLogout}
                // variant=""
                variant="contained"
              >
                Logout
              </Button>
            ) : (
              // <Typography
              //   variant="h6"
              //   style={{ marginLeft: "2rem" }}
              //   color="inherit"
              //   component="div"
              //   onClick={handleLogout}
              // >
              //   Logout
              // </Typography>
              <Link to="/signin">Login</Link>
            )}

            {/* </div> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
