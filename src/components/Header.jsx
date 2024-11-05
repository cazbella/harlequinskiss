import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="container">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#gigs">Gigs</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://merch-site.com" target="_blank" rel="noopener noreferrer">Merchandise</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
