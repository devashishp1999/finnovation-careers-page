import React from "react";
import { Link } from "react-router-dom";

import Icon from "./Icon";
import { IMAGES } from "../assets/assets";

const OpenPosition = ({ data, apply = () => {} }) => {
  const { id, icon, job_title, city, details, min_exp, max_exp } = data;
  const exp = `${min_exp}-${max_exp} Years`;

  return (
    <div id={"job:" + id} className="job_card">
      <h3>
        <Icon src={icon || IMAGES.jobIcon} w={50} />
        <div>
          <Link to={`/careers/${id}`}>{job_title}</Link>
          <p className="loc">
            <Icon src={IMAGES.location} h={16} /> {city ?? ""}
          </p>
        </div>
      </h3>
      <p className="details">
        {details ||
          "You will be expected to lead the company’s entire UI strategy You will be expected to lead the company’s entire UI strategy"}
      </p>
      <hr />
      <p className="skills">
        <span>Skills: </span>Photoshop, Illustrator, Corel draw and after
        effects
      </p>
      <p className="ctc">
        <div>
          <span>CTC</span>10 LPA
        </div>
        <hr />
        <div>
          <span>Total openings</span>2
        </div>
      </p>
      <div className="bottom">
        <p>
          <span>{exp}</span>
          <br />
          Experience
        </p>
        <button
          onClick={apply}
          aria-label="Open apply now form for the position"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default OpenPosition;
