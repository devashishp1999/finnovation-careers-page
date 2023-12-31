import React from "react";
import HeroCarousal from "../components/HeroCarousal";

const HeroSection = () => {

  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <h1>
            <span>Life at</span>
            <br />
            FinnovationZ
          </h1>
          <br />
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p> */}
          <button
            onClick={() => {
              const a = document.createElement("a");
              a.setAttribute("href", "#positions");
              a.click();
              a.remove();
            }}
            className="action"
            aria-label="Open apply now form"
          >
            Apply Now
          </button>
        </div>

        <HeroCarousal />
      </div>
    </section>
  );
};

export default HeroSection;
