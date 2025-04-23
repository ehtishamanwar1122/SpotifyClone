
import React from 'react';
import { Playlist } from '../services/musicData';
import { Play } from 'lucide-react';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  return (
    <div className="bg-spotify-gray-800 p-4 rounded-md hover:bg-spotify-gray-700 transition-all group cursor-pointer">
      <div className="relative mb-4">
        <img 
          src={playlist.coverUrl} 
          alt={playlist.name} 
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        <button className="absolute bottom-2 right-2 bg-spotify-DEFAULT rounded-full p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg hover:scale-105">
          <Play fill="black" size={20} className="text-black" />
        </button>
      </div>
      <h3 className="text-white font-bold truncate">{playlist.name}</h3>
      <p className="text-spotify-gray-400 text-sm line-clamp-2 h-10">{playlist.description}</p>
    </div>
  );
};

export default PlaylistCard;
