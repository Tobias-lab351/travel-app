import ImgCarousel from "./components/carousel/ImgCarousel";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/Search/Search";
import Selects from "./components/selects/Selects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </>
  );
}

export default App;
