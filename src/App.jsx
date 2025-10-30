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

  // Function untuk handle search dari SearchForm
  const handleSearch = async (keyword, mediaType) => {
    setLoading(true);
    setError('');
    
    try {
      // Fetch data dari iTunes API
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(keyword)}&media=${mediaType}&limit=25`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const data = await response.json();
      setSearchResults(data.results);
      
      // Jika tidak ada hasil
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

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={handleSearch} />
      
      {/* Loading State */}
      {loading && <p className="loading">Loading...</p>}
      
      {/* Error State */}
      {error && <p className="error">{error}</p>}
      
      {/* Results */}
      {searchResults.length > 0 && (
        <DataTable data={searchResults} />
      )}
      
      <AudioPlayer />
      <PlaylistBuilder />
    </div>
  );
}

export default App;