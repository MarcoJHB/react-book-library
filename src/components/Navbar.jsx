import React, { useState } from 'react';
import '../App';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [input, setInput] = useState('');

  return (
    <div className="navbar">
      <Link to="/">
        <div className="title">
          <img src="../public/favicon.svg" alt="Logo" />
          <h1>Books Books Books</h1>
        </div>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search for a book..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <Link to="/favourites">
          <h3>Your Favourites</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
