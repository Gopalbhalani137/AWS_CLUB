import "./App.css";
import Hero_sec from "./Components/Hero_sec";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar";
import Section2 from "./Components/Section2";
import { ParallaxProvider } from "react-scroll-parallax";
import Events from "./Components/Events";
import EventDetail from "./Components/EventDetail";
import CursorFollower from "./Utils/CursorFollower";

function App() {
  return (
    <>
    {/* <HeroSection/> */}
      {/* <Hero_sec classname="bg-[#20e1b79c]"/> */}
      {/* <CursorFollower/>
      <ParallaxProvider>
      <Hero_sec/> 
      <Section2/>
      <Events/>
      </ParallaxProvider> */}
      {/* <Navbar /> */}
      <EventDetail/>
    </>
  );
}

export default App;
