
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-60 bg-black flex flex-col h-full flex-shrink-0">
      <div className="p-6">
        <div className="text-white font-bold text-3xl mb-8">
          <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#1DB954"/>
            <path d="M16.7885 10.23C14.6944 8.9376 11.7965 8.77225 8.96323 9.51073C8.50162 9.64343 8.01254 9.37918 7.87715 8.92673C7.74176 8.47428 8.01254 7.99092 8.46631 7.85553C11.6422 7.01465 14.9022 7.21146 17.3172 8.68451C17.7159 8.92673 17.7978 9.45311 17.5556 9.84077C17.3172 10.2368 16.7885 10.3184 16.3985 10.077V10.23H16.7885V10.23ZM16.3985 12.077C16.0817 12.3845 15.6226 12.3023 15.3151 11.9953C13.5356 10.8461 11.155 10.4409 8.96323 11.0772C8.58341 11.1772 8.18791 10.963 8.08791 10.5831C7.98791 10.2033 8.20206 9.80784 8.58187 9.70783C11.1368 8.9878 13.8431 9.45153 15.9397 10.8088C16.2472 10.9907 16.3294 11.5272 16.0219 11.8346L16.3985 12.077ZM15.2332 13.845C14.9839 14.0923 14.6171 14.0923 14.3698 13.8431C12.8198 12.6921 11.0403 12.3864 8.84853 12.9403C8.54991 13.0227 8.24267 12.8409 8.16023 12.5422C8.0778 12.2436 8.25962 11.9364 8.55823 11.8539C11.0403 11.2178 13.0839 11.5739 14.9021 12.9043C15.1493 13.1502 15.1493 13.5169 14.9022 13.7642L15.2332 13.845ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="black"/>
          </svg>
        </div>
        
        <nav className="mb-8">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-white flex items-center p-2 rounded hover:bg-spotify-gray-700 transition-colors">
                <Home className="mr-3" size={24} />
                <span className="font-bold">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/search" className="text-spotify-gray-400 flex items-center p-2 rounded hover:bg-spotify-gray-700 hover:text-white transition-colors">
                <Search className="mr-3" size={24} />
                <span className="font-semibold">Search</span>
              </Link>
            </li>
            <li>
              <Link to="/library" className="text-spotify-gray-400 flex items-center p-2 rounded hover:bg-spotify-gray-700 hover:text-white transition-colors">
                <Library className="mr-3" size={24} />
                <span className="font-semibold">Your Library</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="mb-6 space-y-4">
          <button className="flex items-center w-full p-2 text-spotify-gray-400 hover:text-white transition-colors">
            <PlusSquare className="mr-3" size={20} />
            <span className="font-semibold">Create Playlist</span>
          </button>
          <button className="flex items-center w-full p-2 text-spotify-gray-400 hover:text-white transition-colors">
            <Heart className="mr-3" size={20} />
            <span className="font-semibold">Liked Songs</span>
          </button>
        </div>
        
        <div className="border-t border-spotify-gray-700 pt-4">
          <div className="text-xs text-spotify-gray-400 mb-4">PLAYLISTS</div>
          <div className="space-y-1 text-spotify-gray-400 text-sm max-h-[230px] overflow-y-auto">
            <div className="py-1 px-2 hover:text-white cursor-pointer">My Playlist #1</div>
            <div className="py-1 px-2 hover:text-white cursor-pointer">Chill Vibes</div>
            <div className="py-1 px-2 hover:text-white cursor-pointer">Workout Mix</div>
            <div className="py-1 px-2 hover:text-white cursor-pointer">Study Session</div>
            <div className="py-1 px-2 hover:text-white cursor-pointer">Party Hits</div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto p-4 text-xs text-spotify-gray-400 hover:text-white transition-colors cursor-pointer">
        <span className="border border-spotify-gray-400 px-2 py-1 rounded-full hover:border-white transition-colors mr-2">
          🌐 English
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
