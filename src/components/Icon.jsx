import React from "react";

const Icon = ({ w, h, src, alt = "" }) => {
  return (
    <div className="icon">
      <img width={w || 40} height={h || 40} src={src} alt={alt} />
    </div>
  );
};

export default Icon;
