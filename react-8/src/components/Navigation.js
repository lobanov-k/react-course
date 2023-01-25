import React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Grid spacing={2} container sx={{ p: 1 }}>
        <Grid item>
          <NavLink to="/">Home</NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/about">About</NavLink>
        </Grid>
      </Grid>
    </AppBar>
  );
}
