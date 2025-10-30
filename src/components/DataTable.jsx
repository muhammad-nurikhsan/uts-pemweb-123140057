function DataTable({ data, onPlayTrack, onAddToPlaylist, onSort, currentSort }) {
  return (
    <div className="data-table">
      <div className="table-header">
        <h2>Search Results ({data.length})</h2>
        
        <div className="sort-controls">
          <label>Sort by:</label>
          <select
            value={currentSort}
            onChange={(e) => onSort(e.target.value)}
            className="sort-dropdown"
          >
            <option value="">Default</option>
            <option value="date-newest">Release Date (Newest)</option>
            <option value="date-oldest">Release Date (Oldest)</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="price-low">Price (Low to High)</option>
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Artwork</th>
            <th>Track Name</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Price</th>
            <th>Release Date</th>
            <th>Preview</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.trackId}>
              <td>
                <img
                  src={item.artworkUrl100}
                  alt={item.trackName}
                  width="60"
                  height="60"
                />
              </td>
              <td>{item.trackName || 'N/A'}</td>
              <td>{item.artistName || 'N/A'}</td>
              <td>{item.collectionName || 'N/A'}</td>
              <td>{item.trackPrice ? `$${item.trackPrice}` : 'N/A'}</td>
              <td>
                {item.releaseDate
                  ? new Date(item.releaseDate).toLocaleDateString()
                  : 'N/A'}
              </td>
              <td>
                {item.previewUrl ? (
                  <button
                    onClick={() => onPlayTrack(item)}
                    className="preview-btn"
                  >
                    Play
                  </button>
                ) : (
                  <span style={{ color: '#666' }}>N/A</span>
                )}
              </td>
              <td>
                <button
                  onClick={() => onAddToPlaylist(item)}
                  className="add-btn"
                  title="Add to Playlist"
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;