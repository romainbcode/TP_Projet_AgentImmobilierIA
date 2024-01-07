import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: "#252525", color: "#FFFFFF" }}>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Estate Pro
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
