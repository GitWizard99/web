import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className='app-navbar'>
            <img src="/logo.svg" alt="Logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">App Store</a></li>
                <li><Link to="/booking">Google Play</Link></li>
                <li><a href="#login">Terms and Privacy</a></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    )
}

export default Nav;