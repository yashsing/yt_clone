import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';
import NoData from './NoData';

const MainContainer = () => {
  const searchCache = useSelector((store) => store.search);
  const [videos, setVideos] = useState([]);
  console.log("searchCache", searchCache)

  // useEffect(() => {
  //   if (searchCache?.[searchQuery]) {}
  //   getVideos();
  // }, [searchCache]);

  // const getVideos = async () => {
  //   const data = await fetch(YOUTUBE_VIDEOS_API);
  //   const json = await data.json();
  //   setVideos(json.items); 
  // };
  return (
    <div>
      <ButtonList/>
      {(Array.isArray(videos) && videos.length !== 0) ? <VideoContainer videos={videos}/> : <NoData/>} 
    </div>
  )
}

export default MainContainer