
import React from 'react';
import { Song } from '../services/musicData';
import { Play, Heart } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

interface SongRowProps {
  song: Song;
  index: number;
}

const SongRow = ({ song, index }: SongRowProps) => {
  const { playSong, currentSong, isPlaying, pauseSong, togglePlayPause } = usePlayer();
  
  const isCurrentSong = currentSong?.id === song.id;
  
  const handlePlayClick = () => {
    if (isCurrentSong) {
      togglePlayPause();
    } else {
      playSong(song);
    }
  };

  return (
    <div 
      className={`grid grid-cols-[16px_4fr_3fr_1fr] items-center gap-4 px-4 py-2 rounded group hover:bg-spotify-gray-700 ${isCurrentSong ? 'bg-spotify-gray-700' : ''}`}
    >
      <div className="flex justify-center">
        <div className="relative">
          <span className={`group-hover:hidden ${isCurrentSong ? 'hidden' : 'block'} text-spotify-gray-400`}>
            {index + 1}
          </span>
          <button 
            className={`${isCurrentSong ? 'block' : 'hidden'} group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            onClick={handlePlayClick}
          >
            {isCurrentSong && isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 2H6.5V14H2.5V2ZM9.5 2H13.5V14H9.5V2Z" fill="#1DB954"/>
              </svg>
            ) : (
              <Play fill="#fff" size={16} />
            )}
          </button>
        </div>
      </div>
      
      <div className="flex items-center">
        <img 
          src={song.coverUrl} 
          alt={song.title} 
          className="h-10 w-10 mr-3 object-cover"
        />
        <div>
          <div className={`font-medium ${isCurrentSong ? 'text-spotify-DEFAULT' : 'text-white'}`}>
            {song.title}
          </div>
          <div className="text-sm text-spotify-gray-400 hover:underline cursor-pointer">
            {song.artist}
          </div>
        </div>
      </div>
      
      <div className="text-spotify-gray-400 text-sm hover:underline cursor-pointer">
        {song.album}
      </div>
      
      <div className="flex items-center justify-between">
        <Heart size={16} className="text-spotify-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
        <div className="text-spotify-gray-400 text-sm">
          {song.duration}
        </div>
      </div>
    </div>
  );
};

export default SongRow;
