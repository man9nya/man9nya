import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map/Map'; // Oikea polku Map-komponenttiin
import Nav from './components/layout/Nav';

const App = () => {
  const [collectionSpots, setCollectionSpots] = useState([]);

  useEffect(() => {
    // Haetaan keräyspisteiden tiedot API:sta
    fetch('https://api.kierratys.info/collectionspots/?api_key=1088873da4e98f7edfa6db96ddc01c57c7ea9365&limit=1000') //TÄNNE RAJATETTU HAKU!!!
    .then(response => response.json())
      .then(data => {
        // Tallennetaan haetut tiedot collectionSpots-tilaan
        console.log(data.results.length)
        setCollectionSpots(data.results); // Oletetaan, että data.results sisältää keräyspisteiden tiedot
      })
      .catch(error => {
        console.error('Virhe haettaessa dataa API:sta', error);
      });   
  }, []); // Tyhjä taulukko tarkoittaa, että useEffect suoritetaan vain komponentin ensimmäisellä renderöinnillä


  return (
    <div className="App">
      <h1></h1>
      <Map collectionSpots={collectionSpots} />
    </div>
  );
};

export default App;
