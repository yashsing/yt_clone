import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = (props) => { 
  const {videos} = props; 

  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
        <VideoCard key={video.id} info={video} /> 
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer