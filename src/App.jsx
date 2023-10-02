import React, { useEffect, useState } from "react";

// Sections
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import useScreenSize from "./hooks/useScreenSize";
import HeroSection from "./modules/HeroSection";
import OpenPositions from "./modules/OpenPositions";
import Reasons from "./modules/Reasons";

const App = () => {
  const viewport = useScreenSize(); // 'mobile | desktop'

  return (
    <>
      <Header />

      <main className={viewport}>
        <HeroSection />
        <OpenPositions />
        <Reasons />
      </main>

      <Footer />
    </>
  );
};

export default App;
