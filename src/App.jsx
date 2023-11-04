import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import InfoOne from "./components/InfoOne";
import Infotwo from "./components/Infotwo";
import CTA from "./components/CTA";
import Portfolio from "./components/Portfolio";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar></Navbar>
    <HeroBanner></HeroBanner>
    <About></About>
    <InfoOne></InfoOne>
    <Infotwo></Infotwo>
    <CTA />
    <Portfolio />
    <GetInTouch />
    <Footer />
    </>
  );
}

export default App;
