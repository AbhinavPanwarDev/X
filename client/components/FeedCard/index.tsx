import React from 'react'


const FeedCard: React.FC = () => {
    return <div>
                <div className="max-w-xl mx-auto bg-black  hover:bg-gray-900 transition-all shadow-md overflow-hidden md:max-w-2xl border border-slate-700">
                  <div className="md:flex">
                    <div className="p-4">
                      <div className="flex items-center">
                            <img className="h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1712178355825508352/hCM-906B_400x400.jpg" alt="User avatar" />
                        <div className="ml-4 flex gap-1 items-end cursor-pointer">
                          <div className="text-xl font-bold text-white">Elon Musk</div>
                          <div className="text-md text-white">@realElonMusk</div>
                        </div>
                      </div>
                      <div className="mt-2 ml-14">
                        <p className="text-white">This is a sample tweet. It can contain #hashtags and @mentions.</p>
                      </div>
                      <div className="mt-4 flex items-center ml-14 ">
                        <span className="flex items-center mr-12 cursor-pointer transition-all">
                          <svg className="w-5 h-5 text-gray-400 mr-1 hover:bg-blue-700  rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                          <span className="text-gray-400">12</span>
                        </span>
                        <span className="flex items-center mr-12 cursor-pointer transition-all">
                           <svg className="w-5 h-5 text-gray-400 mr-1 hover:bg-green-700 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                           <span className="text-gray-400">18</span>
                         </span>
                        <span className="flex items-center mr-12 cursor-pointer transition-all ">
                          <svg className="w-5 h-5 text-gray-400 mr-1 hover:bg-orange-400 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                          <span className="text-gray-400">24</span>
                        </span>
                        <span className="flex items-center mr-12 cursor-pointer transition-all">
                          <svg className="w-5 h-5 text-gray-400 mr-1 hover:bg-pink-600 bg-opacity-70 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                          <span className="text-gray-400">42</span>
                        </span>
                        <span className="flex items-center mr-12 cursor-pointer transition-all">
                          <svg className="w-5 h-5 text-gray-400 mr-1 hover:bg-cyan-500 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                          <span className="text-gray-400">5</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
};

export default FeedCard