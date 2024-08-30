import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { BiSolidVideos } from "react-icons/bi";
import { PiMusicNoteThin } from "react-icons/pi";
import { MdPodcasts } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='p-5 w-48'>
      <ul>
        <li className='flex items-center mb-4' > <Link to="/" className='flex items-center space-x-8'> <MdHomeFilled className='text-2xl' /> <span >Home</span></Link> </li> 
        <li className='flex items-center mb-4' > <SiYoutubeshorts className='mr-8 text-2xl'/>Shorts </li>
        <li className='flex items-center mb-4'> <BiSolidVideos className='mr-8 text-2xl' /> Videos </li>
      </ul>
      <h1 className='font-semibold pt-5 flex items-center mb-4'> <MdOutlineSubscriptions className='mr-4 text-2xl font-bold' />Subscriptions </h1>
      <ul>
        <li className='flex items-center mb-4'> <PiMusicNoteThin className='mr-8 text-2xl'/> Music </li>
        <li className='flex items-center mb-4'> <MdPodcasts className='mr-8 text-2xl'/> Podcast </li>
        <li className='flex items-center mb-4'> <SiYoutubegaming className='mr-8 text-2xl'/>Gaming </li>
        <li className='flex items-center mb-4'> <IoNewspaperOutline className='mr-8 text-2xl'/>News </li>
      </ul>
      <h1 className='font-semibold pt-5 flex items-center mb-4'> <MdOutlineWatchLater className='mr-4 text-2xl'/>Watch later </h1>
      <ul>
        <li className='flex items-center mb-4'> <MdOutlineHistory className='mr-8 text-2xl'/>History </li>
        <li className='flex items-center mb-4'> <MdOutlinePlaylistPlay className='mr-8 text-2xl'/>Playlist </li>
        <li className='flex items-center mb-4'> <CiYoutube className='mr-8 text-2xl'/>Your Videos </li>
        <li className='flex items-center mb-4'> <CiSettings className='mr-8 text-2xl'/>Setting  </li>
      </ul>
    </div>
  )
}

export default Sidebar