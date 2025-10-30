function DataTable({ data, onPlay, onAdd, onSort }) {
  return (
    <div className="results">
      <div className="results-header">
        <h2>Results ({data.length})</h2>
        <select onChange={(e) => onSort(e.target.value)} className="sort-select">
          <option value="">Sort by</option>
          <option value="date-new">Newest First</option>
          <option value="date-old">Oldest First</option>
          <option value="price-high">Price: High to Low</option>
          <option value="price-low">Price: Low to High</option>
        </select>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Track</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Price</th>
              <th>Release</th>
              <th>Preview</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.trackId}>
                <td>
                  <img src={item.artworkUrl100} alt="" width="50" />
                </td>
                <td>{item.trackName || '-'}</td>
                <td>{item.artistName || '-'}</td>
                <td>{item.collectionName || '-'}</td>
                <td>{item.trackPrice ? `$${item.trackPrice}` : '-'}</td>
                <td>
                  {item.releaseDate
                    ? new Date(item.releaseDate).toLocaleDateString()
                    : '-'}
                </td>
                <td>
                  {item.previewUrl ? (
                    <button onClick={() => onPlay(item)} className="btn-play">
                      Play
                    </button>
                  ) : (
                    '-'
                  )}
                </td>
                <td>
                  <button onClick={() => onAdd(item)} className="btn-add">
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;