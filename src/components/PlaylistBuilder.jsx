function PlaylistBuilder({ tracks, onRemove, onPlay }) {
  return (
    <div className="playlist">
      <h2>My Playlist ({tracks.length})</h2>
      <div className="playlist-list">
        {tracks.map((track) => (
          <div key={track.trackId} className="playlist-item">
            <img src={track.artworkUrl100} alt="" />
            <div className="track-info">
              <div className="name">{track.trackName}</div>
              <div className="artist">{track.artistName}</div>
            </div>
            <div className="actions">
              {track.previewUrl && (
                <button onClick={() => onPlay(track)} className="btn-small">
                  Play
                </button>
              )}
              <button onClick={() => onRemove(track.trackId)} className="btn-remove">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistBuilder;