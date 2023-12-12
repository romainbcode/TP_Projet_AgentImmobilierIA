import React from "react";
import { Button, Box } from "@mui/material";
import "./card.css";

const CardAvisProfile = ({ nom, avis }) => {
  return (
    <Box class="card">
      <Box class="card-border-top"></Box>
      <Box class="img"></Box>
      <span> {nom}</span>
      <p class="job"> {avis}</p>
    </Box>
  );
};

export default CardAvisProfile;
