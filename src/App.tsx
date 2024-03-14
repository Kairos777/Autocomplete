import React from 'react';
import Autocomplete from "./components/Autocomplete";
import './App.css';
import { mockData } from './mock-data/MockData';


function App() {
  return (
    <div className="App">
      <Autocomplete data={mockData} />
    </div>
  );
}

export default App;
