import React, { useState } from "react";
import HeroCarousal from "../components/HeroCarousal";
import ApplyForm from "../components/ApplyForm";

const HeroSection = () => {
  const [form, setForm] = useState(false);

  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <h1>
            <span>Life at</span>
            <br />
            FinnovationZ
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <button onClick={setForm} className="action" aria-label="Open apply now form">Apply Now</button>
        </div>

        <HeroCarousal />
      </div>

      {form && <ApplyForm position={""} closeSelf={() => setForm(false)} />}
    </section>
  );
};

export default HeroSection;
