import React from 'react'


const FeedCard: React.FC = () => {
    return <div>
                <div className="max-w-xl mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-slate-700">
                  <div className="md:flex">
                    <div className="p-8">
                      <div className="flex items-center">
                            <img className="h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1712178355825508352/hCM-906B_400x400.jpg" alt="User avatar" />
                        <div className="ml-4 ">
                          <div className="text-xl font-bold text-white">Elon Musk</div>
                          <div className="text-sm text-white">@realElonMusk</div>
                        </div>
                      </div>
                      <div className="mt-4 ml-14">
                        <p className="text-white">This is a sample tweet. It can contain #hashtags and @mentions.</p>
                      </div>
                      <div className="mt-4 flex items-center ml-14 ">
                        <span className="flex items-center mr-10 cursor-pointer transition-all">
                          <svg className="w-5 h-5 text-white mr-1 hover:bg-gray-700  rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                          <span className="text-white">12</span>
                        </span>
                        <span className="flex items-center mr-10 cursor-pointer transition-all">
                          <svg className="w-5 h-5 text-white mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                          <span className="text-white">24</span>
                        </span>
                        <span className="flex items-center mr-10 cursor-pointer transition-all">
                          <svg className="w-5 h-5 text-white mr-1 hover:bg-red-400 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                          <span className="text-white">42</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
};

export default FeedCard