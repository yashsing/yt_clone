import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchVideoCard from "./SearchVideoCard";


const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q");
    if (query) {
      fetchSearchResults(query);
    }
  }, [location]);

  const fetchSearchResults = async (query) => {
    const searchAPI = `${YOUTUBE_SEARCH_API}part=snippet&q=${query}&key=${GOOGLE_API_KEY}`;
    try {
      const response = await fetch(searchAPI);
      const data = await response.json();
      setVideos(data.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => {
          return (
            <Link to={"/watch?v=" + video.id.videoId}>
              <SearchVideoCard key={video.id.videoId} video={video} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
