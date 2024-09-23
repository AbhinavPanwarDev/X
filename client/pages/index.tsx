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

import { CredentialResponse, GoogleLogin } from '@react-oauth/google'


import FeedCard from '@/components/FeedCard';
import React, { useCallback } from 'react';
import FeedCardv2 from '@/components/FeedCardv2';
import { BiImageAlt } from 'react-icons/bi';

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

  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {

  }, [])

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen">
        <div className="col-span-3 px-9 py-3">
          <div className='text-3xl w-fit px-6 py-2 ml-10 hover:bg-gray-700 rounded-full cursor-pointer transition-all'>
            <FaXTwitter />
          </div>
          <div className='mt-2 text-xl font-bold px-10 '>
            <ul>
              {sidebarMenuItems.map(item => <li className='flex justify-start items-center gap-3 mt-2 hover:bg-gray-700 rounded-full px-7 py-3 w-fit cursor-pointer transition-all' key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>)}
            </ul>
            <div className='mt-5 px-6'>
              <button className='bg-[#1d9bf0] rounded-full p-3 w-full'>Post</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-slate-700">
          <div>
            <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
              <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-1'>
                  {/* {user?.profileImageURL && (
                    <Image
                    className='rounded-full'
                    src={user?.profileImageURL}
                    alt="user-image"
                    height={50}
                    width={50}
                   />
                  )} */}
                </div>
                <div className='col-span-11'>
                  <textarea className='text-xl px-3 w-full bg-transparent border-b border-slate-600' placeholder="What's Happening?" rows={3}></textarea>
                  <div className='mt-2 flex justify-between'>
                    <BiImageAlt className="text-xl" />
                    <button className='bg-violet-600 font-semibold text-sm py-1 px-4 rounded-full'>
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />

        </div>
        <div className="col-span-4 p-5">
          <div className='p-5 bg-slate-600 rounded-lg w-fit mt-5 ml-5' >
            <h1 className='my-2 text-xl'>New to X? Login here</h1>
            <GoogleLogin onSuccess={(cred) => console.log(cred)}></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  )
}
