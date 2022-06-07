import React from "react";
import { Container } from "@mui/material";
import bgDivider from "../../assets/bgDivider.png";

const SeparatorEmpty = () => {
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
          width: "1920px",
        }}
      >
        
      </Container>
    </>
  );
};

export default SeparatorEmpty;
