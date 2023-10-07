import React from "react";
import Icon from "./Icon";
import { IMAGES } from "../assets/assets";

const OpenPosition = ({ data, apply = () => {} }) => {
  const { id, icon, title, job_type, desc, exp, location } = data;

  return (
    <div id={id} className="card">
      <div>
        <Icon src={icon || IMAGES.jobIcon} w={50} />
        <h3>{title}</h3>
        <p>{job_type}</p>
        <p>{desc}</p>
        <p className="loc">
          <Icon src={IMAGES.location} h={16} /> {location ?? "--"}
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
