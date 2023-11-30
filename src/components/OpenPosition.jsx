import React from "react";
import { Link } from "react-router-dom";

import Icon from "./Icon";
import { IMAGES } from "../assets/assets";

const OpenPosition = ({ data, apply = () => {} }) => {
  const { id, icon, job_title, city, details, positions, salary_max, min_exp, max_exp, skills } = data;
  const exp = `${min_exp}-${max_exp} Years`;

  return (
    <div id={"job:" + id} className="job_card">
      <h3>
        <Icon src={icon || IMAGES.jobIcon} w={50} />
        <div>
          <Link to={`/careers/${id}`}>{job_title}</Link>
          <p className="loc">
            {city ?? ""}
            {/* <Icon src={IMAGES.location} h={16} />  */}
          </p>
        </div>
      </h3>
      <p className="details">
        {details || ""}
      </p>
      <hr />
      <p className="skills">
        <span>Skills: </span>{JSON.parse(skills)?.join(", ")}
      </p>
      <div className="ctc">
        <div>
          <span>CTC</span>{salary_max} LPA
        </div>
        <hr />
        <div>
          <span>Total openings</span>{positions}
        </div>
      </div>
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
