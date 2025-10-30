import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import DataTable from './components/DataTable';
import AudioPlayer from './components/AudioPlayer';
import PlaylistBuilder from './components/PlaylistBuilder';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('playlist');
    if (saved) {
      setPlaylist(JSON.parse(saved));
    }
  }, []);

  const searchMusic = async (keyword, type) => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch(
        `https://itunes.apple.com/search?term=${keyword}&media=${type}&limit=25`
      );
      const data = await res.json();
      
      setResults(data.results);
      if (data.results.length === 0) {
        setError('No results found');
      }
    } catch (err) {
      setError('Something went wrong');
    }
    
    setLoading(false);
  };

  const addToPlaylist = (track) => {
    const exists = playlist.find(t => t.trackId === track.trackId);
    if (exists) {
      alert('Already in playlist');
      return;
    }
    
    const updated = [...playlist, track];
    setPlaylist(updated);
    localStorage.setItem('playlist', JSON.stringify(updated));
  };

  const removeFromPlaylist = (id) => {
    const updated = playlist.filter(t => t.trackId !== id);
    setPlaylist(updated);
    localStorage.setItem('playlist', JSON.stringify(updated));
  };

  const sortResults = (type) => {
    const sorted = [...results];
    
    if (type === 'date-new') {
      sorted.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    } else if (type === 'date-old') {
      sorted.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
    } else if (type === 'price-high') {
      sorted.sort((a, b) => (b.trackPrice || 0) - (a.trackPrice || 0));
    } else if (type === 'price-low') {
      sorted.sort((a, b) => (a.trackPrice || 0) - (b.trackPrice || 0));
    }
    
    setResults(sorted);
  };

  return (
    <div className="container">
      <Header />
      <SearchForm onSearch={searchMusic} />

      {loading && <p className="message">Searching...</p>}
      {error && <p className="message error">{error}</p>}

      {results.length > 0 && (
        <DataTable
          data={results}
          onPlay={setCurrentTrack}
          onAdd={addToPlaylist}
          onSort={sortResults}
        />
      )}

      {playlist.length > 0 && (
        <PlaylistBuilder
          tracks={playlist}
          onRemove={removeFromPlaylist}
          onPlay={setCurrentTrack}
        />
      )}

      {currentTrack && <AudioPlayer track={currentTrack} />}
    </div>
  );
}

export default App;