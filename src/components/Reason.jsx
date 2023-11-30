import React from "react";
import Icon from "./Icon";
import { IMAGES } from "../assets/assets";

const Reason = ({ data, apply = () => {} }) => {
  const { icon, title, desc } = data;

  return (
    <div className="card job_card">
      <div>
        <Icon src={icon || IMAGES.jobIcon} w={50} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Reason;
