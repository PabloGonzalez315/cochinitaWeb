import { Box, Container } from "@mui/material";
import React from "react";
import map from "../../assets/Map.png";

const Ubication = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${map})`,
          backgroundSize: "100%",
          width: "100%",
          height: "900px",
          display: "flex",
          alignItems: "start",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            width: "607px",
            height: "150px",
            borderRadius: "10px",
            backgroundColor: "white",
            backgroundPosition: "center",
            color: "black",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "26px",
            textAlign: "center",
            marginTop: "30px",
            paddingTop: "40px",
          }}
        >
          <p>Ubicación S/N, 145, Ciudad de México, México. CP 25498</p>
        </Box>
      </Container>
    </>
  );
};

export default Ubication;
