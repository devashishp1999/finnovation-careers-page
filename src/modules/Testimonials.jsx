import React from "react";
import TestimonialsSlider from "../components/TestimonialsSlider";
import { IMAGES } from "../assets/assets";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <img
          className="bg_ellipse"
          src={IMAGES.testimonialEllipse}
          alt="background style"
        />

        <h2>Testimonials of team</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p> */}

        <TestimonialsSlider />
      </div>

      <div className="curve c1">
        <img src={IMAGES.arc} alt="" />
      </div>

      <div className="curve c2">
        <img src={IMAGES.arc} alt="" />
      </div>
    </section>
  );
};

export default Testimonials;
