import React from "react";
import { IMAGES } from "../assets/assets";

const { logo } = IMAGES;

const Logo = ({ src = logo, alt = "finnovationz logo" }) => {
  return (
    <div className="logo">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Logo;
