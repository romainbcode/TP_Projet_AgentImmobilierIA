import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: "#252525", color: "#FFFFFF" }}>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Immobilier Pro
        </Typography>
        <Button color="inherit">Accueil</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">À Propos</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
