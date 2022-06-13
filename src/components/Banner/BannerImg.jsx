import React from "react";
import { Container } from '@mui/material';
import "./BannerImg.css";

const BannerImg = () => {
  return (
    <div>
      <Container maxWidth="xl" className="header">
      <div className="fondoImg">
        <div className="backgr">
          <h3>¡Bienvenido a Cochinita!</h3>
          <p> Tu restaurante de comida mexicana sureña tradicional</p>
        </div>
      </div>
        <div className="rectangle">
          <p>Nuestro Menú <img src="https://cdn-icons-png.flaticon.com/512/151/151409.png" alt="" className="imgMenu"/></p>
        </div>
        </Container>
    </div>
  );
};

export default BannerImg;
