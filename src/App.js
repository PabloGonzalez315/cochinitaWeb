import Separator from "./components/separator/Separator";
import Footer from "./components/footer/Footer";
import SeparatorEmpty from "./components/separator/SeparatorEmpty";
import About from "./components/about/About";
import Ubication from "./components/ubication/Ubication";

function App() {
  return (
    <>
      <Separator text="Sobre nosotros" icon="file.png" />
      <About />
      <Separator text="Ubicación" icon="ubication.png" />
      <Ubication />
      <Separator text="Contacto" icon="menu.png" />
      <SeparatorEmpty />
      <Footer />
    </>
  );
}

export default App;
