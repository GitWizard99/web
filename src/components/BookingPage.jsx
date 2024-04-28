// BookingPage.jsx
import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Booking = (props) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center', /* Centers horizontally */
            alignItems: 'center', /* Centers vertically */
            height: '50vh', /* Full height of the viewport */
          }}>
            <h2 style={{
              fontSize: '3rem',
              color: '#000',
              fontFamily: 'Arial, sans-serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              textAlign: 'center',
            }}>Booking page</h2>
        </div>
    )
}

export default Booking;