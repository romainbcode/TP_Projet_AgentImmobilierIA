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

function RealEstateApp() {
  const buttonStyle = {
    backgroundColor: "#950101",
    color: "#FFFFFF",
    margin: "10px",
  };

  const sliderStyle = {
    color: "#FF0000", // Couleur du slider (pouce et piste active)
    width: "50%",
  };

  const [surface, setSurface] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [choice, setChoice] = useState("");

  const textFieldStyle = {
    mb: 3,
    width: "50%",
    color: "blue",
    margin: 2,
    "& label": { color: "cyan" },
    "& label.Mui-focused": {
      color: "#FFFFFE",
      borderColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid yellow",
      },
      "&:hover fieldset": {
        borderColor: "pink",
      },
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
    priceRange: [0, 1000000],
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
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                  <Typography id="range-slider" gutterBottom>
                    Fourchette de prix
                  </Typography>
                  <Slider
                    name="priceRange"
                    value={values.priceRange}
                    onChange={(e, newValue) =>
                      setFieldValue("priceRange", newValue)
                    }
                    valueLabelDisplay="auto"
                    max={10000000}
                    style={sliderStyle}
                  />

                  <FormControl
                    sx={{ width: "50%", marginTop: 5, marginBottom: 5 }}
                  >
                    <InputLabel id="demo-simple-select-label">Choix</InputLabel>
                    <Select
                      name="choice"
                      value={values.choice}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>0 à 500k$</MenuItem>
                      <MenuItem value={2}>500k to 1million$</MenuItem>
                      <MenuItem value={3}>1million to 2.5millions$</MenuItem>
                      <MenuItem value={4}>2.5millions to 8millions$</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{ width: "30%", marginBottom: 3 }}
                  >
                    Rechercher
                  </Button>
                </Box>
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
          justifyContent: "center",
        }}
      >
        <CardAvisProfile nom="Luke" avis="cool" />
        <CardAvisProfile nom="Luke2" avis="cool2" />
        <CardAvisProfile nom="Luke3" avis="cool3" />
        <CardAvisProfile nom="Luke4" avis="cool4" />
        <CardAvisProfile nom="Luke5" avis="cool5" />
      </Box>
    </Box>
  );
}

export default RealEstateApp;
