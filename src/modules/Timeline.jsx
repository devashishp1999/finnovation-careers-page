import React from "react";
import { IMAGES } from "../assets/assets";

const Timeline = () => {
  return (
    <section className="timeline">
      <div className="container">
        <h2>
          <span>Achieving Milestones</span>A Timeline of Success
        </h2>

        <div className="content">
          <span className="line1">
            <img src={IMAGES.timeline1} alt="lines" loading="lazy"/>
          </span>
          <div style={{ "--i": 2 }}>
            <h3>2018</h3>
            <p>We started our journey & crossed 1 Lakh YouTube Subscribers</p>
          </div>
          <div style={{ "--i": 1 }}>
            <h3>2019</h3>
            <p>
              Crossed 5 Lakh YT subscribers
            </p>
            <span className="line2">
              <img src={IMAGES.timeline2} alt="lines" loading="lazy"/>
            </span>
          </div>
          <div style={{ "--i": 0 }}>
            <h3>2020</h3>
            <p>Crossed 1 Mn YT Subs & 10,000 paid learners</p>
            <span className="line2">
              <img src={IMAGES.timeline3} alt="lines" loading="lazy"/>
            </span>
          </div>
          <div style={{ "--i": 1 }}>
            <h3>2021</h3>
            <p>Started mutual fund aggregator for corporates</p>
            <span className="line2">
              <img src={IMAGES.timeline2} alt="lines" loading="lazy"/>
            </span>
          </div>
          <div style={{ "--i": 2 }}>
            <h3>2022</h3>
            <p>Crossed 2 Mn YT subs & our two Apps crossed 1 Lakh downloads</p>
            <span className="line2">
              <img src={IMAGES.timeline3} alt="lines" loading="lazy"/>
            </span>
          </div>
        </div>
      </div>

      <div className="map">
        <img src={IMAGES.map} alt="map" />
      </div>
    </section>
  );
};

export default Timeline;
