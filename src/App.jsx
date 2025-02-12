import Destination from "./components/destination/Destination";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ImgCarousel from "./components/carousel/ImgCarousel";
import Selects from "./components/selects/Selects";
import Footer from "./components/footer/Footer";
import Search from "./components/search/Search";

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
