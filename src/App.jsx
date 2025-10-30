import { useState } from 'react';
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

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={handleSearch} />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {searchResults.length > 0 && (
        <DataTable data={searchResults} onPlayTrack={handlePlayTrack} />
      )}

      <AudioPlayer currentTrack={currentTrack} />
      <PlaylistBuilder />
    </div>
  );
}

export default App;