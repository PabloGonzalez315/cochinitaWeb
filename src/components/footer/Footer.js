import { Box, Container, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: "1920px",
          height: "400px",
          backgroundColor: "black",
          borderRadius: "50px 50px 0 0",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "310px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <List
            sx={{
              width: "440px",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "19px",
              fontStyle: "normal",
              color: "white",
            }}
          >
            <ListItem disablePadding sx={{ padding: "0 0 10px 0" }}>
              <ListItemText primary="Contacto: +555555555" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Horarios y días disponibles:" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Lunes" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Martes" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Miércoles" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Jueves" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Viernes" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Sábado" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Domingo" />
            </ListItem>
          </List>
        </Box>
        <hr />
        <Box
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "25px",
            lineHeight: "30px",
            textAlign: "center",
            color: "white",
          }}
        >
          <p>Copyright © - Cochinitas resto - 2022</p>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
