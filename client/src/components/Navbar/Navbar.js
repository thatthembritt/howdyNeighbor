import React from 'react';
import './style.css';

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="container">
      <img src="./howdyneighbor_4.png"></img>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="/login"
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            Login
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/signup"
            onClick={() => handlePageChange('Signup')}
            className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
          >
            Sign Up
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/donate"
            onClick={() => handlePageChange('Donate')}
            className={currentPage === 'Donate' ? 'nav-link active' : 'nav-link'}
          >
            Donate
          </a>
        </li>
      </ul>
    </div>
  );
}