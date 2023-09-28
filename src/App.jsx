import React, { useEffect, useState } from "react";

// Sections
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import useScreenSize from "./hooks/useScreenSize";
import HeroSection from "./modules/HeroSection";

const App = () => {
  const viewport = useScreenSize(); // 'mobile | desktop'

  return (
    <>
      <Header viewport={viewport} />

      <main className={viewport}>
        <HeroSection />
      </main>

      <Footer viewport={viewport} />
    </>
  );
};

export default App;
