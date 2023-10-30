import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map/Map'; // Oikea polku Map-komponenttiin

const App = () => {
  const [collectionSpots, setCollectionSpots] = useState([]);

  // Haetaan keräyspisteet API:sta käyttäen useEffectia tai muuta sopivaa tapaa

  return (
    <div className="App">
      <h1>Keräyspisteet Kartalla</h1>
      <Map collectionSpots={collectionSpots} />
    </div>
  );
};

export default App;
