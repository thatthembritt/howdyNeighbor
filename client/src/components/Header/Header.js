import React from 'react';
import './style.css';
import Navbar from '../Navbar/Navbar';

export default function Header ({currentPage, handlePageChange}) {
    return (
        <header className="header">
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
}