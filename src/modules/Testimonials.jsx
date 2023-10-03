import React from "react";
import TestimonialsSlider from "../components/TestimonialsSlider";

const Testimonials = () => {
  return (
    <section
      className="testimonials"
      // style={{ backgroundImage: "url(/images/testimonialBG.svg)" }}
    >
      <div className="container">
        <h2>Testimonials of team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <TestimonialsSlider />
      </div>
    </section>
  );
};

export default Testimonials;
