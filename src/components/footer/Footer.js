import { Box, Container } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          height:"100%",
          backgroundColor: "black",
          borderRadius: "50px 50px 0 0",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <ul className="list">
            <li>
              <p>Contacto: +555555555</p>
            </li>
            <li>
              <p>Horarios y días disponibles:</p>
            </li>
            <li>
              <p>Lunes</p>
            </li>
            <li>
              <p>Martes</p>
            </li>
            <li>
              <p>Miércoles</p>
            </li>
            <li>
              <p>Jueves</p>
            </li>
            <li>
              <p>Viernes</p>
            </li>
            <li>
              <p>Sábado</p>
            </li>
            <li>
              <p>Domingo</p>
            </li>
          </ul>
        </Box>
        <hr />
        <Box
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "2rem",
            lineHeight: "1",
            textAlign: "center",
            color: "white",
            height: "100%",
            paddingBottom: "1%"
          }}
        >
          <p>Copyright © - Cochinitas resto - 2022</p>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
