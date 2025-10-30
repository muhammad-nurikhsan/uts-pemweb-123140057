function PlaylistBuilder({ playlist, onRemove, onPlay }) {
  if (playlist.length === 0) {
    return (
      <div className="playlist-builder">
        <h2>My Playlist</h2>
        <p className="empty-playlist">
          Your playlist is empty. Add some tracks from search results!
        </p>
      </div>
    );
  }

  return (
    <div className="playlist-builder">
      <div className="playlist-header">
        <h2>My Playlist</h2>
        <span className="track-count">{playlist.length} tracks</span>
      </div>

      <div className="playlist-items">
        {playlist.map((track) => (
          <div key={track.trackId} className="playlist-item">
            <img
              src={track.artworkUrl100}
              alt={track.trackName}
              className="playlist-artwork"
            />
            
            <div className="playlist-info">
              <h4>{track.trackName}</h4>
              <p>{track.artistName}</p>
            </div>

            <div className="playlist-actions">
              {track.previewUrl && (
                <button
                  onClick={() => onPlay(track)}
                  className="play-small-btn"
                  title="Play"
                >
                  ▶
                </button>
              )}
              <button
                onClick={() => onRemove(track.trackId)}
                className="remove-btn"
                title="Remove from playlist"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistBuilder;