import React, {useEffect, useState} from 'react';
import { GOOGLE_API_KEY } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const SuggestionVideos = () => {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecommendedVideos = async () => {
          try {
            const fetchUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`
            const response = await fetch(fetchUrl);
            const data = await response.json();
              setVideos(data.items);
          } catch (error) {
            console.error('Error fetching recommended videos:', error);
          }
        };
      
        fetchRecommendedVideos();
      }, []);

      const handleVideoClick = (videoId) => {
        navigate(`/watch?v=${videoId}`)
      } 

      return (
        <div className="w-1/3 ml-5">
          <h2 className="text-lg font-semibold mb-4">Recommended Videos</h2>
          {videos.length > 0 ? (
            videos.map((video) => (
              <div key={video.id} className="mb-4 w-96 h-28 flex cursor-pointer " onClick={() => handleVideoClick(video.id)}>
                <img
                  src={video.snippet.thumbnails.high.url} 
                  alt={video.snippet.title}
                  className="  rounded mr-4" 
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium">{video.snippet.title}</p>
                  <p className="text-xs text-gray-600">{`${video.statistics.viewCount} views`}</p>

                </div>
               </div>
            ))
          ) : (
            <p>No recommended videos available.</p>
          )}
        </div>
      );
    };
export default SuggestionVideos;
