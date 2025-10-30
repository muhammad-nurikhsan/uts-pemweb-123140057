import { useState, useRef } from 'react';

function AudioPlayer({ currentTrack }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!currentTrack?.previewUrl) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!currentTrack) {
    return null;
  }

  return (
    <div className="audio-player">
      <div className="player-info">
        <img src={currentTrack.artworkUrl100} alt={currentTrack.trackName} />
        <div className="track-details">
          <h3>{currentTrack.trackName}</h3>
          <p>{currentTrack.artistName}</p>
        </div>
      </div>

      <div className="player-controls">
        <button onClick={togglePlay} className="play-btn">
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>

      <audio
        ref={audioRef}
        src={currentTrack.previewUrl}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}

export default AudioPlayer;