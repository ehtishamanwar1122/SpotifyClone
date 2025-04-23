
import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Heart, Mic2, ListMusic, MonitorSpeaker } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

const Player = () => {
  const { 
    currentSong, 
    isPlaying, 
    volume, 
    progress, 
    togglePlayPause, 
    nextSong, 
    prevSong, 
    setVolume, 
    setProgress 
  } = usePlayer();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Calculate time based on progress
  const calculateTime = (progress: number) => {
    const maxDuration = 214; // 3:34 in seconds
    const currentTime = (progress / 100) * maxDuration;
    return formatTime(currentTime);
  };

  return (
    <div className="h-20 bg-spotify-black border-t border-spotify-gray-700 fixed bottom-0 w-full grid grid-cols-3 items-center px-4">
      {/* Left: Song Info */}
      <div className="flex items-center">
        {currentSong ? (
          <>
            <img 
              src={currentSong.coverUrl} 
              alt={currentSong.title} 
              className="h-14 w-14 object-cover mr-3"
            />
            <div className="mr-4">
              <div className="text-sm text-white font-medium hover:underline cursor-pointer">
                {currentSong.title}
              </div>
              <div className="text-xs text-spotify-gray-400 hover:underline hover:text-white cursor-pointer">
                {currentSong.artist}
              </div>
            </div>
            <Heart size={16} className="text-spotify-gray-400 hover:text-white cursor-pointer" />
          </>
        ) : (
          <div className="text-spotify-gray-400 text-sm">
            Select a track to play
          </div>
        )}
      </div>

      {/* Center: Controls */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mb-2">
          <button className="mx-2 text-spotify-gray-400 hover:text-white">
            <Shuffle size={16} />
          </button>
          <button className="mx-2 text-spotify-gray-400 hover:text-white" onClick={prevSong}>
            <SkipBack size={16} />
          </button>
          <button 
            className="mx-2 bg-white rounded-full p-2 hover:scale-105 transition-transform"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause size={16} className="text-black" /> : <Play size={16} className="text-black" />}
          </button>
          <button className="mx-2 text-spotify-gray-400 hover:text-white" onClick={nextSong}>
            <SkipForward size={16} />
          </button>
          <button className="mx-2 text-spotify-gray-400 hover:text-white">
            <Repeat size={16} />
          </button>
        </div>
        <div className="flex items-center w-full">
          <span className="text-xs text-spotify-gray-400 w-10 text-right">
            {currentSong ? calculateTime(progress) : "0:00"}
          </span>
          <div className="mx-2 w-full">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={progress} 
              onChange={(e) => setProgress(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <span className="text-xs text-spotify-gray-400 w-10">
            {currentSong ? currentSong.duration : "0:00"}
          </span>
        </div>
      </div>

      {/* Right: Volume Controls */}
      <div className="flex items-center justify-end">
        <button className="mx-1 text-spotify-gray-400 hover:text-white">
          <Mic2 size={16} />
        </button>
        <button className="mx-1 text-spotify-gray-400 hover:text-white">
          <ListMusic size={16} />
        </button>
        <button className="mx-1 text-spotify-gray-400 hover:text-white">
          <MonitorSpeaker size={16} />
        </button>
        <div className="flex items-center mx-1">
          <Volume2 size={16} className="text-spotify-gray-400 mr-2" />
          <div className="w-24">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={volume} 
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
