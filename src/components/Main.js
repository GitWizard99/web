import React, { useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Booking from './BookingPage.jsx';
import Hero from './Hero.js';
import About from './about.jsx';
import Contact from './Contact.jsx';


const Main = () => {

    return (
        <main>
            <Routes>
                <Route path='/' element={<div>
                    <Hero />
                    <About />
                </div>} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </main>

    )
}

export default Main;
