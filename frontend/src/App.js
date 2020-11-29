import './App.css';
import Entries from './component/Entries';

function App() {
  return (
    <div className="App">   
      <header className="App-header">
        <p>
          Watchlist 
        </p>
        <Entries/>
      </header>    
    </div>
  );
}

export default App;
