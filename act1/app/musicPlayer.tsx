// currently unused/untested

import { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // restore saved time when page turns
    const savedTime = localStorage.getItem('audioTime');
    if (savedTime && audioRef.current) {
      audioRef.current.currentTime = parseFloat(savedTime);
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      localStorage.setItem('audioTime', String(audioRef.current.currentTime));
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="/music/jadeWake.mp3" 
        onTimeUpdate={handleTimeUpdate}
      />
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;
