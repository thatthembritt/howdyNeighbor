import React from 'react';
import './style.css';

const logo = require('../../Assets/howdyneighbor_4.png');

export default function NavbarLoggedIn({ currentPage, handlePageChange }) {
  return (
    <div className="container">
      <img src={logo} alt="logo"></img>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="/search"
            onClick={() => handlePageChange('Search')}
            className={currentPage === 'Search' ? 'nav-link active' : 'nav-link'}
          >
            Find Help
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
           About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Donate"
            onClick={() => handlePageChange('Donate')}
            className={currentPage === 'Donate' ? 'nav-link active' : 'nav-link'}
          >
            Donate
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/logout"
            onClick={() => handlePageChange('Logout')}
            className={currentPage === 'Logout' ? 'nav-link active' : 'nav-link'}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}