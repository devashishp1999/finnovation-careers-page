import React from "react";
import { px } from "utils-deva";

const Icon = ({ w, h, src, alt = "" }) => {
  return (
    <span className="icon" style={{ width: px(w), height: px(h) }}>
      <img src={src} alt={alt} />
    </span>
  );
};

export default Icon;
