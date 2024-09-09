import React from "react";

const SearchVideoCard = ({ video }) => {
  const { snippet } = video;
  return (
    <div className="border p-2 rounded-lg">
      <img
        className="w-full rounded-lg"
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
      />
      <h3 className="text-lg font-semibold mt-2">{snippet.title}</h3>
      <p className="text-sm text-gray-500">{snippet.channelTitle}</p>
    </div>
  );
};

export default SearchVideoCard;
