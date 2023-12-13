import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Button,
  Slider,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import NavBar from "./nav-bar";
import CardAvisProfile from "./card-avis/card";
//import axios from 'axios';
import ProfilePic1 from "./assets/avis1.png";
import ProfilePic2 from "./assets/avis2.png";
import ProfilePic3 from "./assets/avis3.png";
import ProfilePic4 from "./assets/avis4.png";
import ProfilePic5 from "./assets/avis5.png";

function RealEstateApp() {
  const textFieldStyle = {
    mb: 3,
    width: "100%",
    margin: 2,
    "& label": { color: "#FFFFFE" },
    "& label.Mui-focused": {
      color: "#FFFFFE",
      borderColor: "#00ADB5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #00ADB5",
      },
      "&:hover fieldset": {
        borderColor: "#EEEEEE",
      },
    },
    "& .MuiInputBase-input": {
      color: "#FFFFFE", // ou toute autre couleur de votre choix
    },
  };

  const handleSearch = async () => {
    console.log("Button pressed");
    /*
        // Remplacer par votre URL API
        const apiUrl = 'https://yourapi.com/search';

        try {
            const response = await axios.post(apiUrl, {
                surface,
                bathrooms,
                bedrooms,
                location,
                priceRange
            });
            console.log(response.data);
        } catch (error) {
            console.error("Erreur lors de l'appel API:", error);
        }*/
  };

  const initialValues = {
    surface: "",
    bathrooms: "",
    bedrooms: "",
    localisation: "",
    choice: "",
  };

  return (
    <Box>
      <NavBar />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          // Logique de soumission ici
          console.log(values);
        }}
      >
        {(formik) => {
          const { values, setFieldValue, handleChange } = formik;
          return (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Box
                  sx={{
                    padding: 5,
                    bgcolor: "#393E46",
                    alignItems: "center",
                    borderRadius: "25px",
                    boxShadow: "0 8px 14px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Field
                        sx={textFieldStyle}
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                        name="surface"
                        label="Square"
                        as={TextField}
                      />
                      <Field
                        sx={textFieldStyle}
                        as={TextField}
                        name="bathrooms"
                        label="Number of bathrooms"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                      />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Field
                        sx={textFieldStyle}
                        as={TextField}
                        name="bedrooms"
                        label="Number of rooms"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                      />
                      <Field
                        sx={textFieldStyle}
                        as={TextField}
                        name="localisation"
                        label="localisation"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FormControl sx={textFieldStyle} variant="outlined">
                      <InputLabel id="demo-simple-select-label">
                        Choix
                      </InputLabel>
                      <Select
                        name="choice"
                        value={values.choice}
                        onChange={handleChange}
                        sx={{ color: "white" }}
                        variant="outlined"
                      >
                        <MenuItem value={1}>0 à 500k$</MenuItem>
                        <MenuItem value={2}>500k to 1million$</MenuItem>
                        <MenuItem value={3}>1million to 2.5millions$</MenuItem>
                        <MenuItem value={4}>2.5millions to 8millions$</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ marginTop: 3 }}
                >
                  Esimate price
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          bgcolor: "#393E46",
          borderRadius: "25px",
          padding: 5,
          margin: 5,
          boxShadow: "0 8px 14px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardAvisProfile
          image={ProfilePic1}
          nom="Anissa"
          avis="Application intuitive, essentielle pour tout agent immobilier moderne."
        />
        <CardAvisProfile
          image={ProfilePic2}
          nom="John"
          avis="Gain de temps incroyable, interface utilisateur impeccable."
        />
        <CardAvisProfile
          image={ProfilePic3}
          nom="Maria"
          avis="Service client réactif, application très utile pour les visites."
        />
        <CardAvisProfile
          image={ProfilePic4}
          nom="David"
          avis="Bonne application, mais nécessite des mises à jour plus fréquentes."
        />
        <CardAvisProfile
          image={ProfilePic5}
          nom="Mickel"
          avis="Très efficace pour le suivi des clients, mais pourrait être plus personnalisable."
        />
      </Box>
    </Box>
  );
}

export default RealEstateApp;
