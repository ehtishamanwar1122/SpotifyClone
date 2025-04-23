
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Song } from '../services/musicData';

interface PlayerContextProps {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  playSong: (song: Song) => void;
  pauseSong: () => void;
  togglePlayPause: () => void;
  nextSong: () => void;
  prevSong: () => void;
  setVolume: (volume: number) => void;
  setProgress: (progress: number) => void;
  queue: Song[];
  addToQueue: (song: Song) => void;
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(70);
  const [progress, setProgressState] = useState(0);
  const [queue, setQueue] = useState<Song[]>([]);

  // Play a specific song
  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setProgressState(0);
  };

  // Pause current song
  const pauseSong = () => {
    setIsPlaying(false);
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Play next song in queue
  const nextSong = () => {
    if (queue.length > 0) {
      playSong(queue[0]);
      setQueue(queue.slice(1));
    }
  };

  // Play previous song (mock implementation)
  const prevSong = () => {
    // In a real app, you would maintain history
    setProgressState(0);
  };

  // Set volume
  const setVolume = (value: number) => {
    setVolumeState(value);
  };

  // Set progress
  const setProgress = (value: number) => {
    setProgressState(value);
  };

  // Add song to queue
  const addToQueue = (song: Song) => {
    setQueue([...queue, song]);
  };

  // Simulate progress updates when a song is playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentSong) {
      interval = setInterval(() => {
        setProgressState((prev) => {
          // Reset to 0 when reaching 100
          if (prev >= 100) {
            nextSong();
            return 0;
          }
          return prev + 0.5;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentSong]);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        volume,
        progress,
        playSong,
        pauseSong,
        togglePlayPause,
        nextSong,
        prevSong,
        setVolume,
        setProgress,
        queue,
        addToQueue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = (): PlayerContextProps => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};
