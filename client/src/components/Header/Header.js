import React from 'react';
import './style.css';
import Navbar from '../Navbar/Navbar';

export default function Header ({currentPage, handlePageChange}) {
    return (
        <header className="header">
            <h1>HOWDY<span className="Andres">NEIGHBOR</span></h1>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
}