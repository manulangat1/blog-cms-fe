import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Photos
        </Typography>
        <div style={{ flexGrow: "1", flexDirection: "row" }}></div>
        {/* <div> */}
        <Typography variant="h6" color="inherit" component="div">
          Home
        </Typography>
        <Typography
          variant="h6"
          style={{ marginLeft: "2rem" }}
          color="inherit"
          component="div"
        >
          School
        </Typography>
        <Typography
          variant="h6"
          style={{ marginLeft: "2rem" }}
          color="inherit"
          component="div"
        >
          Logout
        </Typography>
        {/* </div> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
