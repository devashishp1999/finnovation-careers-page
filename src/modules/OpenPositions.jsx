import React, { useState } from "react";
import OpenPosition from "../components/OpenPosition";

const OpenPositions = () => {
  const [showAll, setShowAll] = useState(false);

  const openPositions = [
    {
      icon: "",
      id: "visual_designer",
      title: "Visual Designer",
      job_type: "Full-time",
      desc: "You will be expected to lead the company’s entire UI strategy",
      exp: "1-2 Year",
    },
    {
      icon: "",
      id: "developer",
      title: "Developer",
      job_type: "Full-time",
      desc: "You will be expected to lead the company’s entire UI strategy",
      exp: "1-2 Year",
    },
    {
      icon: "",
      id: "product_designer",
      title: "Product Designer",
      job_type: "Full-time",
      desc: "You will be expected to lead the company’s entire UI strategy",
      exp: "1-2 Year",
    },
  ];

  function applyToPosition(id) {
    console.log(id);

    // Open Form
  }

  return (
    <section className="positions">
      <div className="container">
        <h2>Open Positions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <div className="cards">
          {openPositions
            .slice(0, showAll ? undefined : 6)
            .map((position, i) => (
              <OpenPosition
                key={position.id + i}
                data={position}
                apply={() => applyToPosition(position.id)}
              />
            ))}
        </div>
        {openPositions.length > 6 && (
          <p>
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? "View Less" : "All Open Positions"}
            </button>
          </p>
        )}
      </div>
    </section>
  );
};

export default OpenPositions;
