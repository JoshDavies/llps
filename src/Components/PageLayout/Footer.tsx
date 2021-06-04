import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className='footer container' id ='footer' role='contentinfo'>
    <span>
      <h2>Contact us</h2>
      <hr/>
      <p title='Telephone'>
        <FontAwesomeIcon icon={'phone'} aria-label='Telephone' />07933763183
      </p>
      <p title='Email'>
        <FontAwesomeIcon icon={['far', 'envelope']} />enquiries@lindenleaspreschool.co.uk
      </p>
    </span>
    
  </footer>
);

export default Footer;
