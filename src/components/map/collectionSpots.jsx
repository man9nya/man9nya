import React, { useState, useEffect } from 'react';
import MapComponent from './Map';

const App = () => {
  const [collectionSpots, setCollectionSpots] = useState([]);

  return (
    <div className="App">
      <h1>Keräyspisteet Kartalla</h1>
      <MapComponent collectionSpots={collectionSpots} />
    </div>
  );
};

export default App;
