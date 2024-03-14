import React from 'react';
import Index from "./components/Autocomplete";
import './App.css';
import { mockData } from './mock-data/MockData';


function App() {
  return (
    <div className="App">
      <Index data={mockData} />
    </div>
  );
}

export default App;
