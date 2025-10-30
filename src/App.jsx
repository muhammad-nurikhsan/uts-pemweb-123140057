import Header from './components/Header';
import SearchForm from './components/SearchForm';
import DataTable from './components/DataTable';
import AudioPlayer from './components/AudioPlayer';
import PlaylistBuilder from './components/PlaylistBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <DataTable />
      <AudioPlayer />
      <PlaylistBuilder />
    </div>
  );
}

export default App;