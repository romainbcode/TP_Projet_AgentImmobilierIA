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
  Modal,
} from "@mui/material";

import NavBar from "./nav-bar";
import CardAvisProfile from "./card-avis/card";
import axios from "axios";
import ProfilePic1 from "./assets/avis1.png";
import ProfilePic2 from "./assets/avis2.png";
import ProfilePic3 from "./assets/avis3.png";
import ProfilePic4 from "./assets/avis4.png";

export const App = () => {
  const [open, setOpen] = useState(false);
  let [estimation, setEstimation] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEstimation("");
  };

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

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "20px",
    bgcolor: "#393E46",
    border: "1px solid",
    borderColor: "#00ADB5",
    boxShadow: 24,
    p: 4,
  };

  const handleSearch = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/generatePrice",
        values
      );
      console.log(response.data);
      setEstimation(response.data);
    } catch (error) {
      console.error("Erreur lors de l'appel API:", error);
    }
  };

  const initialValues = {
    surface: "",
    bathrooms: "",
    bedrooms: "",
    localisation: "",
  };

  return (
    <Box>
      <NavBar />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          handleSearch(values);
          handleClickOpen();
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
                    width: "50%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                      }}
                    >
                      <Field
                        sx={textFieldStyle}
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                        name="surface"
                        label="Square 🏠"
                        as={TextField}
                      />
                      <Field
                        sx={textFieldStyle}
                        as={TextField}
                        name="bathrooms"
                        label="Number of bathrooms 🛀🏼"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                      }}
                    >
                      <Field
                        sx={textFieldStyle}
                        as={TextField}
                        name="bedrooms"
                        label="Number of rooms 🛌"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                      />
                      <Field
                        sx={textFieldStyle}
                        as={TextField}
                        name="localisation"
                        label="localisation 📍"
                        variant="outlined"
                        fullWidth
                        autoComplete="off"
                      />
                    </Box>
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
      {
        (estimation = !"" ? (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleModal}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Predictions of the Price of Your Property
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Based on the number of bedrooms, bathrooms, area and your
                location, our artificial intelligence has estimated a price of{" "}
                {estimation} $.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  onClick={handleClose}
                  style={{
                    marginTop: "10px",
                  }}
                  variant="contained"
                  color="error"
                  sx={{ display: "flex" }}
                >
                  Fermer
                </Button>
              </Box>
            </Box>
          </Modal>
        ) : (
          <></>
        ))
      }

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
          avis="Intuitive application, essential for any modern real estate agent."
        />
        <CardAvisProfile
          image={ProfilePic2}
          nom="John"
          avis="Incredible time saver, flawless user interface."
        />
        <CardAvisProfile
          image={ProfilePic3}
          nom="Maria"
          avis="Responsive customer service, very useful application for visits."
        />
        <CardAvisProfile
          image={ProfilePic4}
          nom="David"
          avis="Good application, but requires more frequent updates."
        />
      </Box>
    </Box>
  );
};

export default App;
