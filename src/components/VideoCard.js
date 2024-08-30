import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;  


  return (
    <div className='p-2 m-2 w-72 shadow-lg bg-white rounded-lg'>
        <img className='rounded-lg w-full' alt='thumbnail' src={thumbnails.medium.url} /> 
        <div className='ml-3'>
        <ul>
            <li className='font-bold text-sm line-clamp-5 leading-tight py-2'>{title}</li>
            <li className='text-sm text-gray-800'>{channelTitle}</li>
            <li className='text-sm text-gray-800'>{statistics.viewCount}Views</li>
        </ul> 
        </div>
    </div>
  )
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard