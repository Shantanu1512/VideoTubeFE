import React from "react";

function VideoList({
  _id,
  title,
  views,
  thumbnail,
  duration,
  description,
  userName,
}) {
  return (
    <>
      <div className="text-white" onClick={() => console.log(`Hello ${_id}`)}>
        <div className="row-start-1 row-end-3">
          <img
            src={thumbnail}
            width="30"
            height="30"
            className="w-full h-60 overflow-hidden m-4"
          />
        </div>
        <div className="flex items-center py-2 px-2 m-4 gap-2">
          <div className="flex justify-center items-center">
            <div className="w-10 h-10 rounded-full object-cover border border-white"></div>
          </div>
          <div className="">
            <h1 className="col-span-2 font-bold">{title}</h1>
            <h1 className="col-span-2">Views :{views}</h1>
            <h1 className="col-span-2">{userName}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoList;
