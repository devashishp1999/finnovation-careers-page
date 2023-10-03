import React, { useEffect, useState } from "react";

// Sections
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import useScreenSize from "./hooks/useScreenSize";
import HeroSection from "./modules/HeroSection";
import OpenPositions from "./modules/OpenPositions";
import Reasons from "./modules/Reasons";
import Testimonials from "./modules/Testimonials";
import Culture from "./modules/Culture";
import Timeline from "./modules/Timeline";
import ApplyForm from "./components/ApplyForm";

const App = () => {
  const viewport = useScreenSize(); // 'mobile | desktop'

  return (
    <>
      <Header />

      <main className={viewport}>
        <HeroSection />
        <OpenPositions />
        <Testimonials />
        <Reasons />
        <Culture />
        <Timeline />
      </main>

      <Footer />
    </>
  );
};

export default App;
