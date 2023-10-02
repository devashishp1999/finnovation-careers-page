import React from "react";
import { IMAGES } from "../assets/assets";
import Reason from "../components/Reason";

const Reasons = () => {
  const reasons = [
    {
      icon: IMAGES.accomodation,
      title: "Save Your Maximum Salary",
      desc: "Free accomodation.",
    },
    {
      icon: IMAGES.build,
      title: "Join Our “Build From Rural Mission”",
      desc: "Work From Nature.",
    },
    {
      icon: IMAGES.salary,
      title: "Best in the Industry Salary.",
      desc: "Best package in the market.",
    },
    {
      icon: IMAGES.days,
      title: "5 Days Week.",
      desc: "Saturday and Sunday off.",
    },
  ];

  return (
    <section className="reasons">
      <div className="container">
        <h2>Top 4 Reasons on why you<br/>should join us?</h2>
        <hr />

        <div className="cards">
          {reasons.map((reason, i) => (
            <Reason key={i} data={reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
