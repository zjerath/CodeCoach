import React from 'react';
import { Link } from 'react-router-dom';
import './Walkthrough.css';
import Banner from './Banner'

const Walkthrough = () => {
  return (
    <div>
        <Banner />
        <div className='center'>
            <h2>Walkthrough Component</h2>
            <p>This is the Walkthrough component.</p>
        </div>
    </div>
  );
};

export default Walkthrough;