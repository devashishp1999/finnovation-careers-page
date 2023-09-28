import React, { useEffect, useState } from "react";

// Sections
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import useScreenSize from "./hooks/useScreenSize";
import HeroSection from "./modules/HeroSection";
import OpenPositions from "./modules/OpenPositions";

const App = () => {
  const viewport = useScreenSize(); // 'mobile | desktop'

  return (
    <>
      <Header viewport={viewport} />

      <main className={viewport}>
        <HeroSection />
        <OpenPositions />
      </main>

      <Footer viewport={viewport} />
    </>
  );
};

export default App;
