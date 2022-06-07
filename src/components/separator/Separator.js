import React from "react";
import { Container, Box } from "@mui/material";
import bgDivider from "../../assets/bgDivider.png";
import "./Separator.css";

const Separator = (props) => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          alignItems: "center",
          backgroundImage: `url(${bgDivider})`,
          backgroundSize: "100%",
          display: "flex",
          height: "180px",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            height: "153px",
            justifyContent: "center",
            width: "763px",
          }}
        >
          <h3 className="subtitles">{props.text} </h3>
          <img src={`images/${props.icon}`} alt="icon" />
        </Box>
      </Container>
    </>
  );
};

export default Separator;
