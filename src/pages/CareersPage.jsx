import React from "react";

import HeroSection from "../modules/HeroSection";
import OpenPositions from "../modules/OpenPositions";
import Testimonials from "../modules/Testimonials";
import Reasons from "../modules/Reasons";
import Culture from "../modules/Culture";
import Timeline from "../modules/Timeline";

const CareersPage = () => {
  return (
      <div className="careers_page">
        <HeroSection />
        <OpenPositions />
        <Testimonials />
        <Reasons />
        <Culture />
        <Timeline />
      </div>
  );
};

export default CareersPage;
