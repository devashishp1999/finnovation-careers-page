import React from "react";
import { Link } from "react-router-dom";

import Icon from "./Icon";
import { IMAGES } from "../assets/assets";

const SimilarPosition = ({ data, apply = () => {} }) => {

  const { id, icon, job_title, city, job_type, details, min_exp, max_exp } =
    data;
  const exp = `${min_exp}-${max_exp} Years`;

  return (
    <div id={"job:" + id} className="card">
      <div>
        <Icon src={icon || IMAGES.jobIcon} w={50} />
        <h3>
          <Link to={`/careers/${id}`}>{job_title}</Link>
        </h3>
        <p>{job_type}</p>
        <p>{details}</p>
        <p className="loc">
          <Icon src={IMAGES.location} h={16} /> {city ?? "--"}
        </p>
      </div>
      <div>
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

export default SimilarPosition;
