import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} isOpen={isOpen} />
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
