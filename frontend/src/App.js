import './App.css';

import Entries from './component/Entries/Entries';
import Menu from './component/Menu/Menu';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Entries />
      </header>
      <Footer />
    </div>
  );
}

export default App;
