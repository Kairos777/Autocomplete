import React from 'react';
import Autocomplete from "./components/Autocomplete";
import './App.css';
import { dataFetcher } from './services/dataFetcher';

function App() {
  return (
    <div className="App">
      <Autocomplete search={dataFetcher.searchFruit} />
    </div>
  );
}

export default App;
