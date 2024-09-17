import React from 'react'


const FeedCard2: React.FC = () => {
    return <div>

                <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center">
                      <img className="h-10 w-10 sm:h-12 sm:w-12 rounded-full flex-shrink-0" src="https://path/to/avatar.jpg" alt="User avatar" />
                      <div className="ml-3 sm:ml-4 min-w-0 flex-1">
                        <div className="text-sm sm:text-base font-medium text-gray-900 truncate">John Doe</div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate">@johndoe</div>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <p className="text-sm sm:text-base text-gray-700">This is a sample tweet. It can contain #hashtags and @mentions.</p>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between text-xs sm:text-sm">
                      <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-150 ease-in-out mb-2 sm:mb-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        <span>42</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-150 ease-in-out mb-2 sm:mb-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        <span>12</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-green-500 transition-colors duration-150 ease-in-out mb-2 sm:mb-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                        <span>24</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-150 ease-in-out mb-2 sm:mb-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        <span>18</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-150 ease-in-out">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                        <span>5</span>
                      </button>
                    </div>
                  </div>
                </div>

    </div>
              
};

export default FeedCard2