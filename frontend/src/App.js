import { React, useState } from 'react';
import './App.css';

import Entries from './component/Entries/Entries';
import Menu from './component/Menu/Menu';
import Filter from './component/Filter/Filter';
import Footer from './component/Footer/Footer';

function App() {

  const [isFilterVisible, setIsFilterVisible] = useState(true);

  return (
    <div className="App">
      <Menu
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
      />
      <div className="Drawers-Wrapper">
        <Filter isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} />
        <div className="App-body">
          <Entries />
        </div>
        <Footer />
      </div>
    </div >
  );
}

export default App;
