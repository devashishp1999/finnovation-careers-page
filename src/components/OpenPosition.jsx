import React from "react";
import Icon from "./Icon";
import { IMAGES } from "../assets/assets";

const OpenPosition = ({ data, apply = () => {} }) => {
  const { id, icon, job_title, city, job_type, details, min_exp, max_exp } = data;
  const exp = `${min_exp}-${max_exp} Years`;

  return (
    <div id={"job:"+id} className="card">
      <div>
        <Icon src={icon || IMAGES.jobIcon} w={50} />
        <h3>{job_title}</h3>
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
        <button onClick={apply}>Apply Now</button>
      </div>
    </div>
  );
};

export default OpenPosition;
