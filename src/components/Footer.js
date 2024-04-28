import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='app-footer'>
            <img src="logo.svg" alt="Logo" />
            <ul className='doormat navigation'>
                <li className='doormat navigation'><h1 className="menu-title">Doormat Navigation</h1></li>
                <li className='doormat navigation'><Link to="/">Home</Link></li>
                <li className='doormat navigation'><a href="#about">Terms of Use</a></li>
                <li className='doormat navigation'><a href="#reservations">Privacy Policy</a></li>
            </ul>
            <ul className='contact'>
                <li className='doormat navigation'><h1 className="menu-title">Contact</h1></li>
                <li className='contact'><Link to="/contact">Email</Link></li>
            </ul>
            <ul>
                <li className='social media'><h1 className="menu-title">Social Media</h1></li>
                <li className='social media'><a href="#facebook">Facebook</a></li>
                <li className='social media'><a href="#tiktok">Tiktok</a></li>
                <li className='social media'><a href="Instagram">Instagram</a></li>
            </ul>
            <p>All rights reserved © 2024 FolloWizard</p>
        </footer>
    )
}

export default Footer;