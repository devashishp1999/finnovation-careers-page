import React from "react";
import { px } from "../utils";

const Icon = ({ w, h, src, alt = "" }) => {
  return (
    <div className="icon" style={{ width: px(w), height: px(h) }}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Icon;
