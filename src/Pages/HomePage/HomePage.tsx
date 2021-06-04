import React from 'react';
import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {
  return (
    <div id='HomePage'>
      <div className='container' >
        <h2><FontAwesomeIcon icon={'home'} /> Home Page</h2>
        <div className='subSection'>
          <p>The Pre School years are an extremely important time. We recognise this and aim to make it a happy and rewarding experience for every child and their family.</p>
          <p>Linden Leas has been established since 1981. Lesley Davies took over this happy and successful Pre School in 1998.</p>
        </div>
      </div>
    </div>
  )
};

export default HomePage;