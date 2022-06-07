import { Box, Container } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: "1920px",
          height: "1200px",
          backgroundColor: "rgba(209, 39, 39, 0.9)",
        }}
      >
        <Box
          sx={{
            width: "80%",
            padding: "100px",
          }}
        >
          <h4 className="aboutSubtitle">Misión</h4>
          <p className="aboutText">
            Ofrecer un producto de orígenes tradicionales mexicanos de alto
            nivel y calidad.
          </p>
          <h4 className="aboutSubtitle">Visión</h4>
          <p className="aboutText">
            Ser la empresa de comida tradicional prehispánica mexicana número
            uno del país.
          </p>
          <h4 className="aboutSubtitle">Valores</h4>

          <ul className="aboutText">
            <li>Conservar las recetas</li>
            <li>Apoyo a las comunidades indigenas</li>
            <li>La higiene</li>
            <li>La honestidad</li>
            <li>La resiliencia</li>
            <li>La autenticidad</li>
          </ul>
        </Box>
      </Container>
    </>
  );
};

export default About;
