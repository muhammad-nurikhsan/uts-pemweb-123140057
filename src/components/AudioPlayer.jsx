import { useState, useRef } from 'react';

function AudioPlayer({ track }) {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (playing) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="player">
      <img src={track.artworkUrl100} alt="" />
      <div className="player-info">
        <div className="track-name">{track.trackName}</div>
        <div className="artist-name">{track.artistName}</div>
      </div>
      <button onClick={toggle} className="player-btn">
        {playing ? 'Pause' : 'Play'}
      </button>
      <audio ref={audio} src={track.previewUrl} onEnded={() => setPlaying(false)} />
    </div>
  );
}

export default AudioPlayer;