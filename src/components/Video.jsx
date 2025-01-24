import React from "react";

function Video({ src, controls }) {
  return (
    <div>
      <video
        src={src}
        controls={controls}
        width="320"
        height="240"
      ></video>
    </div>
  );
}

export default Video;
