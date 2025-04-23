
import React, { useState } from 'react';
import { PlusCircle, UserCircle, List, Grid, Clock, Filter } from 'lucide-react';
import PlaylistCard from '../components/PlaylistCard';
import { featuredPlaylists, recentlyPlayed } from '../services/musicData';
import { Playlist } from '../services/musicData';

const LibraryPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'playlists' | 'artists' | 'albums'>('all');
  
  const allPlaylists: Playlist[] = [...recentlyPlayed, ...featuredPlaylists];
  
  const filteredPlaylists = allPlaylists.filter(playlist => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'playlists') return playlist.type === 'Playlist';
    return true;
  });

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="bg-spotify-gray-900 sticky top-0 z-10 py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Your Library</div>
        <div className="flex items-center">
          <button className="text-spotify-gray-400 hover:text-white p-2 rounded-full">
            <PlusCircle size={24} />
          </button>
          <button className="bg-black bg-opacity-70 rounded-full p-1 ml-4 flex items-center">
            <UserCircle size={24} className="text-white" />
          </button>
        </div>
      </header>

      {/* Filters */}
      <div className="px-8 pt-4 flex items-center justify-between">
        <div className="flex space-x-2">
          <button 
            className={`rounded-full px-4 py-1 text-sm font-bold ${selectedFilter === 'all' ? 'bg-white text-black' : 'bg-spotify-gray-700 text-white hover:bg-spotify-gray-600'}`}
            onClick={() => setSelectedFilter('all')}
          >
            All
          </button>
          <button 
            className={`rounded-full px-4 py-1 text-sm font-bold ${selectedFilter === 'playlists' ? 'bg-white text-black' : 'bg-spotify-gray-700 text-white hover:bg-spotify-gray-600'}`}
            onClick={() => setSelectedFilter('playlists')}
          >
            Playlists
          </button>
          <button 
            className={`rounded-full px-4 py-1 text-sm font-bold ${selectedFilter === 'artists' ? 'bg-white text-black' : 'bg-spotify-gray-700 text-white hover:bg-spotify-gray-600'}`}
            onClick={() => setSelectedFilter('artists')}
          >
            Artists
          </button>
          <button 
            className={`rounded-full px-4 py-1 text-sm font-bold ${selectedFilter === 'albums' ? 'bg-white text-black' : 'bg-spotify-gray-700 text-white hover:bg-spotify-gray-600'}`}
            onClick={() => setSelectedFilter('albums')}
          >
            Albums
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-spotify-gray-400 hover:text-white">
            <Filter size={20} />
          </button>
          <div className="flex bg-spotify-gray-800 rounded-md">
            <button 
              className={`p-1 ${viewMode === 'list' ? 'text-white' : 'text-spotify-gray-400 hover:text-white'}`}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
            <button 
              className={`p-1 ${viewMode === 'grid' ? 'text-white' : 'text-spotify-gray-400 hover:text-white'}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Library Content */}
      <div className="px-8 pt-6">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredPlaylists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        ) : (
          <div className="bg-spotify-gray-800 rounded-md overflow-hidden">
            <div className="grid grid-cols-[4fr_2fr_1fr] px-4 py-2 border-b border-spotify-gray-700 text-spotify-gray-400 text-sm">
              <div>TITLE</div>
              <div>DATE ADDED</div>
              <div className="flex justify-end"><Clock size={16} /></div>
            </div>
            {filteredPlaylists.map((playlist) => (
              <div 
                key={playlist.id}
                className="grid grid-cols-[4fr_2fr_1fr] px-4 py-3 hover:bg-spotify-gray-700 group"
              >
                <div className="flex items-center">
                  <img 
                    src={playlist.coverUrl} 
                    alt={playlist.name} 
                    className="h-12 w-12 mr-3 object-cover"
                  />
                  <div>
                    <div className="font-medium text-white">{playlist.name}</div>
                    <div className="text-sm text-spotify-gray-400">
                      {playlist.type} • {playlist.createdBy || 'You'}
                    </div>
                  </div>
                </div>
                <div className="text-spotify-gray-400 text-sm self-center">
                  {new Date().toLocaleDateString()}
                </div>
                <div className="text-spotify-gray-400 text-sm self-center text-right">
                  {playlist.type === 'Playlist' ? '60 songs' : '32 songs'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
