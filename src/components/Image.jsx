import React from "react";

function Image({ image, label, className = "" }, ref) {
  return (
    <div>
      {label && <label>{label}</label>}
      <img src={image} />
    </div>
  );
}

export default Image;
