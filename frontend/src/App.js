import './App.css';

import Entries from './component/Entries/Entries';
import Menu from './component/Menu/Menu';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-body">
        <Entries />
      </header>
      <Footer />
    </div>
  );
}

export default App;
