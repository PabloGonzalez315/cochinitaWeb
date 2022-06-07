import React from "react";
import Carousel from "better-react-carousel";
import "./carousel.css";
import { Container } from "@mui/material";

const CarouselPics = () => {
  return (
    <Container maxWidth="xl">
      <Carousel cols={2} rows={1} gap={10} loop showDots autoPlay={10} style={{ maxWidht: "100%" }}>
        <Carousel.Item>
          <img width="100%" src="images/tacos1.jpg" alt="Tacos" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="images/ahogadas.jpg" alt="Ahogadas" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="images/tacos2.jpg" alt="Tacos" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="images/margarita.jpg" alt="Margarita" />
        </Carousel.Item>

        <Carousel.Item>
          <img width="100%" src="images/margarita2.jpg" alt="Margarita" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="images/tacos3.jpg" alt="Tacos" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="images/tacos4.jpg" alt="Tacos" />
        </Carousel.Item>

        <Carousel.Item>
          <img width="100%" src="images/nachos2.jpg" alt="Nachos" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselPics;
