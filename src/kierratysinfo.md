const axios = require('axios');
const L = require('leaflet');

const API_KEY = '2438918e27110f7d1bcc423120a10e9629cd2e83';
const BASE_URL = 'https://api.kierratys.info/';

// Lisää OpenStreetMap-taustakartta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Hae kaikki keräyspisteet Vantaalta
axios.get(BASE_URL + 'collectionspots/?api_key=' + API_KEY + '&municipality=Vantaa')
  .then(response => {
    const collectionSpots = response.data.results;

    // Lisää keräyspisteiden sijainnit kartalle
    collectionSpots.forEach(spot => {
      const lat = spot.geometry.coordinates[1];
      const lon = spot.geometry.coordinates[0];

      L.marker([lat, lon]).addTo(map)
        .bindPopup(`<b>${spot.name}</b><br>${spot.address}<br>${spot.municipality}`);
    });
  })
  .catch(error => {
    console.error('Virhe:', error);
  });