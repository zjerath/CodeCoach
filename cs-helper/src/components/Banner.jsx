import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
        <div className='bannerflex'>
          <img src="/logo.png" alt="CodeCoach Logo" className="logo" />
          <h1>CodeCoach</h1>
        </div>
        <nav>
          <button className='bannerbut1'>
            <Link to="/function-helper" className='bannerlink'>Function Helper</Link>
          </button>
          <button className='bannerbut2'>
            <Link to="/walkthrough" className='bannerlink'>Walkthrough</Link>
          </button>
        </nav>
    </div>
  );
};

export default Banner;