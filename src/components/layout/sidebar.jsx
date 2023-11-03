import React, { useState } from 'react';
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Tähän voit lisätä toiminnallisuuden hakukyselyn käsittelemiseksi
    console.log('Hakusana:', searchQuery);
    // Lisää tähän hakutoiminnallisuus tai lähetä tieto johonkin muuhun komponenttiin
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // tekee selaamisesta sujuvaa
    });
  };

  return (
    <div className="navbar">
      <div className="logo">
        {/* Tähän voit lisätä yrityksen tai sivuston logon */}
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Hae..."
        />
        <button onClick={handleSearch}>Hae</button>
      </div>
      <div className="scroll-to-top">
        <button onClick={scrollToTop}>Siirry ylös</button>
      </div>
    </div>
  );
};

export default Navbar;