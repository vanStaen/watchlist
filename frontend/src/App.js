import { React, useState } from 'react';
import './App.css';

import Entries from './component/Entries/Entries';
import Menu from './component/Menu/Menu';
import Filter from './component/Filter/Filter';
import AddForm from './component/AddForm/AddForm';
import Footer from './component/Footer/Footer';

function App() {

  const [showAddForm, setShowAddForm] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [filters, setFilters] = useState([]);

  return (
    <div className="App">
      <Menu
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
        showAddForm={showAddForm}
        setShowAddForm={setShowAddForm}
      />
      <AddForm
        showAddForm={showAddForm}
        setShowAddForm={setShowAddForm}
      />
      <div className="Drawers-Wrapper">
        <Filter
          isFilterVisible={isFilterVisible}
          setIsFilterVisible={setIsFilterVisible}
          filters={filters}
          setFilters={setFilters}
        />
        <div className="App-body">
          <Entries
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <Footer />
      </div>
    </div >
  );
}

export default App;
