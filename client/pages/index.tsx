import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaHashtag } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { IoBookmarks } from "react-icons/io5";
import { GiCharacter } from "react-icons/gi";
import { CgMoreO } from "react-icons/cg";


import FeedCard from '@/components/FeedCard';
import React from 'react';
const inter = Inter({ subsets: ['latin'] })

interface XsidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: XsidebarButton[] = [
  {
    title: 'Home',
    icon: <GoHomeFill />
  },
  {
    title: 'Explore',
    icon: <FaHashtag />
  },
  {
    title: 'Notifications',
    icon: <IoNotifications />
  },
  {
    title: 'Messages',
    icon: <RiMessage2Fill />
  },
  {
    title: 'Bookmarks',
    icon: <IoBookmarks />
  },
  {
    title: 'Profile',
    icon: <GiCharacter />
  },
  {
    title: 'More',
    icon: <CgMoreO />

  }
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen">
        <div className="col-span-3 px-9 py-3">
          <div className='text-3xl w-fit px-6 py-2 ml-10 hover:bg-gray-700 rounded-full cursor-pointer transition-all'>
            <FaXTwitter />
          </div>
          <div  className='mt-2 text-xl font-bold px-10 '>
            <ul>
            {sidebarMenuItems.map(item => <li className='flex justify-start items-center gap-3 mt-2 hover:bg-gray-700 rounded-full px-7 py-3 w-fit cursor-pointer transition-all' key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>)}
            </ul>
            <div className='mt-5 px-6'>
              <button className='bg-[#1d9bf0] rounded-full p-3 w-full'>Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-slate-700">
          <FeedCard />
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  )
}
