import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { isNullValue } from "../utils/utilFunction";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardVoice } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { cacheResults } from "../utils/searchSlice"; // Adjust the import path accordingly
import { useNavigate, useLocation, Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize the navigate function
  const location = useLocation(); 
  useEffect (() => {
    const query = new URLSearchParams(location.search).get("q");
    setSearchQuery(query);
  }, []); 

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache?.[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (!isNullValue(searchQuery)) {
      const searchAPI = `${YOUTUBE_SEARCH_API}part=snippet&q=${searchQuery}&key=${GOOGLE_API_KEY}`;
      fetch(searchAPI)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.items && data.items.length > 0) {
            const suggestions = data.items.map((item) => item.snippet.title);
            setSuggestions(suggestions);
            // Update cache
            dispatch(
              cacheResults({
                [searchQuery]: suggestions,
              })
            );
          } else {
            setSuggestions([]);
            console.error("No search suggestions found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching search suggestions:", error);
        });
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 items-center">
      {/* Header Left: Menu and Logo */}
      <div className="flex items-center col-span-1">
        <RxHamburgerMenu
          className="h-10 cursor-pointer text-3xl"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            className="h-12 mx-6"
            alt="youtube"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          />
        </a>
      </div>

      {/* Header Center: Search Bar */}
      <div className="col-span-10 px-18 relative">
        <div className="flex items-center">
          <input placeholder="Search"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full h-10"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 h-10">
            <CiSearch className="text-2xl" />
          </button>
          <button className="ml-8 p-2 h-10 flex items-center text-3xl shadow-sm bg-gray-100 rounded-full">
            <MdKeyboardVoice />
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 top-[2.5rem] left-0">
            <ul>
              {suggestions?.map((s, index) => (
                <li
                  key={`${s}-${index}`}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                  onClick={(event) => {
                    event.preventDefault();
                    setSearchQuery(s);
                    setShowSuggestions(false);
                    navigate(`/search?q=${encodeURIComponent(s)}`);
                  }}
                >
                <span><CiSearch className="text-2xl" /> {s} </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Header Right: User Icon and Notifications */}
      <div className="col-span-1 flex items-center justify-end">
        {/* <button className="mr-4 p-2" > */}
        <Link to="/login" className="mr-4 p-2"> <FaUser className="text-2xl" /> </Link> 
          {/* <FaUser className="text-2xl"  */}
        {/* </button> */}
      </div>
      <button className="p-2 text-3xl">
        <CiBellOn />
      </button>
    </div>
  );
};

export default Head;