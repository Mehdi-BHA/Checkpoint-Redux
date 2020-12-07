import React from 'react';
import './style.css';
import SearchBar from '../SearchBar';

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="logo">TO DO App</h1>
            <SearchBar/>
            <i className="fas fa-cog"></i>
        </div>
    )
}

export default Navbar
