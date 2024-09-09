import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
// import { useSearchParams } from "react-router-dom";
// import { isNullValue } from "../utils/utilFunction";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Home from "./Home";

const MainContainer = () => {
  const [videos, setVideos] = useState([]);
  // const [searchParams] = useSearchParams();

  useEffect(() => {
    getVideos();
    // if (!isNullValue(searchParams.get("q"))) {
    //   getVideos(searchParams.get("q"));
    }, [])
  // }, [searchParams.get("q")]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div>
      <ButtonList />
      {Array.isArray(videos) && videos.length !== 0 ? (
        <VideoContainer videos={videos} />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default MainContainer;
