import React from "react";
import { Button, Box } from "@mui/material";
import "./card.css";

const CardAvisProfile = ({ image, nom, avis }) => {
  return (
    <Box class="card">
      <Box class="card-border-top"></Box>
      <img
        src={image}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          display: "block",
          margin: "0 auto",
          border: "1px solid #00adb5",
        }}
      />
      <span> {nom}</span>
      <p class="job"> {avis}</p>
    </Box>
  );
};

export default CardAvisProfile;
