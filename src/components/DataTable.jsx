function DataTable({ data }) {
  return (
    <div className="data-table">
      <h2>Search Results ({data.length} items)</h2>
      
      <table>
        <thead>
          <tr>
            <th>Artwork</th>
            <th>Track Name</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Price</th>
            <th>Release Date</th>
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
              <td>
                {item.trackPrice 
                  ? `$${item.trackPrice}` 
                  : 'N/A'
                }
              </td>
              <td>
                {item.releaseDate 
                  ? new Date(item.releaseDate).toLocaleDateString() 
                  : 'N/A'
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;