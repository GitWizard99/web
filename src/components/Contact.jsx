import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Contact = (props) => {

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
              fontFamily: 'Open Sans, sans-serif',
              textAlign: 'center',
            }}>Email</h2>
            <p style={{
              fontSize: '2rem',
              color: '#000',
              fontFamily: 'Open Sans, sans-serif',
              textAlign: 'center',
            }}>support@followizard.app</p>
        </div>
    )
}

export default Contact;