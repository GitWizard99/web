import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='app-main-hero'>
            <h1>FolloWizard</h1>
            <p>The perfect app to know who unfollowed you on Instagram</p>
            <div className="button-container">
                <Link to ="/booking">
                    <button aria-label='on Click'>Download on iOS</button>
                </Link>
            </div>
            <div className="button-container">
                <Link to ="/booking">
                    <button aria-label='on Click'>Download on Android</button>
                </Link>
            </div>
            <img src="hero image.svg" alt="Hero Section"></img>
            <img src='Download on Appstore.svg'></img>
            <img src='Download on Google Play.svg'></img>
        </section>
    )
}

export default Hero;