import { useState } from 'react';

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const [mediaType, setMediaType] = useState('music');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi: keyword tidak boleh kosong
    if (keyword.trim() === '') {
      setError('Please enter a search keyword');
      return;
    }
    
    // Reset error
    setError('');
    
    // Kirim data ke parent component (App.jsx)
    onSearch(keyword, mediaType);
  };

  return (
    <div className="search-form">
      <h2>Search Music</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Input Keyword */}
        <div className="form-group">
          <label htmlFor="keyword">Search Keyword:</label>
          <input
            type="text"
            id="keyword"
            placeholder="Enter artist, song, or album name..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={error ? 'error' : ''}
          />
        </div>

        {/* Dropdown Media Type */}
        <div className="form-group">
          <label htmlFor="mediaType">Media Type:</label>
          <select
            id="mediaType"
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
          >
            <option value="music">Music</option>
            <option value="podcast">Podcast</option>
            <option value="audiobook">Audiobook</option>
            <option value="movie">Movie</option>
            <option value="tvShow">TV Show</option>
          </select>
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="btn-search">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;