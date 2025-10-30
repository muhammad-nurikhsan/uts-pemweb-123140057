import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import DataTable from './components/DataTable';
import AudioPlayer from './components/AudioPlayer';
import PlaylistBuilder from './components/PlaylistBuilder';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const savedPlaylist = localStorage.getItem('musicPlaylist');
    if (savedPlaylist) {
      setPlaylist(JSON.parse(savedPlaylist));
    }
  }, []);

  const handleSearch = async (keyword, mediaType) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(
          keyword
        )}&media=${mediaType}&limit=25`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setSearchResults(data.results);

      if (data.results.length === 0) {
        setError('No results found. Try a different search term.');
      }
    } catch (err) {
      setError('Error fetching data. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
  };

  const handleAddToPlaylist = (track) => {
    const isAlreadyInPlaylist = playlist.some(
      (item) => item.trackId === track.trackId
    );

    if (isAlreadyInPlaylist) {
      alert('This track is already in your playlist!');
      return;
    }

    const newPlaylist = [...playlist, track];
    setPlaylist(newPlaylist);
    localStorage.setItem('musicPlaylist', JSON.stringify(newPlaylist));
  };

  const handleRemoveFromPlaylist = (trackId) => {
    const newPlaylist = playlist.filter((track) => track.trackId !== trackId);
    setPlaylist(newPlaylist);
    localStorage.setItem('musicPlaylist', JSON.stringify(newPlaylist));
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
    let sortedResults = [...searchResults];

    if (sortType === 'date-newest') {
      sortedResults.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    } else if (sortType === 'date-oldest') {
      sortedResults.sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      );
    } else if (sortType === 'price-high') {
      sortedResults.sort((a, b) => (b.trackPrice || 0) - (a.trackPrice || 0));
    } else if (sortType === 'price-low') {
      sortedResults.sort((a, b) => (a.trackPrice || 0) - (b.trackPrice || 0));
    }

    setSearchResults(sortedResults);
  };

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={handleSearch} />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {searchResults.length > 0 && (
        <DataTable
          data={searchResults}
          onPlayTrack={handlePlayTrack}
          onAddToPlaylist={handleAddToPlaylist}
          onSort={handleSort}
          currentSort={sortBy}
        />
      )}

      <PlaylistBuilder
        playlist={playlist}
        onRemove={handleRemoveFromPlaylist}
        onPlay={handlePlayTrack}
      />

      <AudioPlayer currentTrack={currentTrack} />
    </div>
  );
}

export default App;