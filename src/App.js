import "./App.css";
import React from "react";
import ButtoNav from "./components/ButtonNav/ButtoNav";
import ImgMedio from "./components/ImgMedio/ImgMedio.jsx";
import BannerImg from "./components/Banner/BannerImg.jsx";
import CarouselPics from "./components/carouselPics/CarouselPics";
import Separator from "./components/separator/Separator";
import SeparatorEmpty from "./components/separator/SeparatorEmpty";
import About from "./components/about/About";
import Ubication from "./components/ubication/Ubication";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <ButtoNav />
      <BannerImg />
      <ImgMedio />
      <Separator text="Galería" icon="menu.png" />
      <CarouselPics />
      <Separator text="Sobre nosotros" icon="file.png" />
      <About />
      <Separator text="Ubicación" icon="ubication.png" />
      <Ubication />
      <Separator text="Contacto" icon="menu.png" />
      <SeparatorEmpty />
      <Footer />
    </div>
  );
}

export default App;
