import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllVideos } from "../store/slices/videoSlice";
import { VideoList } from "./index";

function Home() {
  const videos = useSelector((state) => state.video.videos.docs);
  const dispatch = useDispatch();
  useEffect(() => {
    let limit = 10;
    let page = 1;
    dispatch(getAllVideos(limit, page));
  }, [dispatch]);
  return (
    <div className="w-full bg-gray-900 h-full">
      <div className="grid grid-cols-3 gap-4 ">
        {videos.map((video, index) => (
          <div className="bg-black-900">
            <VideoList
              className="w-full h-full"
              _id={video._id}
              key={index}
              title={video.title}
              thumbnail={video.thumbnail}
              views={video.views}
              duration={video.duration}
              userName={video.videoOwner[0].userName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
