import React, { useState, useEffect } from 'react';
import Breweries from './components/Breweries'
import './App.css';
import breweryService from './service';

function App() {
  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    breweryService.getAll().then(res => setBreweries(res.data))
  }, [])

  return (
    <div className="App">
      <Breweries breweries={breweries} />
    </div>
  );
}

export default App;
