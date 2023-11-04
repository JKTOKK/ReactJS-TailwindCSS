import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar></Navbar>
    <HeroBanner></HeroBanner>
    </>
  );
}

export default App;
