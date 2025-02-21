import "./App.css";
import Hero_sec from "./Components/Hero_sec";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar";
import Section2 from "./Components/Section2";
import { ParallaxProvider } from "react-scroll-parallax";
import Events from "./Components/Events";
import EventDetail from "./Components/EventDetail";

function App() {
  return (
    <>
    {/* <HeroSection/> */}
      {/* <Hero_sec classname="bg-[#20e1b79c]"/> */}
      <ParallaxProvider>
      <Hero_sec/> 
      <Section2/>
      <Events/>
      </ParallaxProvider>
      <EventDetail/>
      {/* <Navbar classname="mt-32"/> */}
    </>
  );
}

export default App;
