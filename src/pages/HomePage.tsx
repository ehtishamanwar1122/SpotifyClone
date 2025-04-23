
import React from 'react';
import { ChevronLeft, ChevronRight, Bell, UserCircle } from 'lucide-react';
import PlaylistCard from '../components/PlaylistCard';
import SongRow from '../components/SongRow';
import { featuredPlaylists, allSongs, recentlyPlayed } from '../services/musicData';

const HomePage = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <header className="bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-spotify-gray-900 sticky top-0 z-10 py-4 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <button className="bg-black bg-opacity-70 rounded-full p-1 mr-2">
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button className="bg-black bg-opacity-70 rounded-full p-1">
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="bg-black text-white rounded-full py-1 px-4 text-sm font-bold hover:scale-105 transition-transform mr-2">
            Upgrade
          </button>
          <button className="bg-black bg-opacity-70 rounded-full p-1 mr-2">
            <Bell size={20} className="text-white" />
          </button>
          <button className="bg-black bg-opacity-70 rounded-full p-1 flex items-center">
            <UserCircle size={24} className="text-white" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="px-8 pt-4">
        {/* Recently played section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Recently played</h2>
            <button className="text-spotify-gray-400 text-sm font-bold hover:text-white">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {recentlyPlayed.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </section>

        {/* Featured playlists section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Made for you</h2>
            <button className="text-spotify-gray-400 text-sm font-bold hover:text-white">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {featuredPlaylists.slice(0, 6).map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </section>

        {/* Popular songs section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Popular songs</h2>
          <div className="bg-spotify-gray-900 bg-opacity-30 rounded-md p-4">
            <div className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 border-b border-spotify-gray-700 text-spotify-gray-400 text-sm">
              <div className="text-center">#</div>
              <div>TITLE</div>
              <div>ALBUM</div>
              <div className="text-right">DURATION</div>
            </div>
            <div className="mt-2">
              {allSongs.map((song, index) => (
                <SongRow key={song.id} song={song} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
