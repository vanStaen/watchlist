import './App.css';

import Entries from './component/Entries';
import Menu from './component/Menu/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Entries />
      </header>
    </div>
  );
}

export default App;
