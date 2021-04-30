import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className='footer container' id ='footer' role='contentinfo'>
    <p>Project by:{' '}
      <a
        className="repo-link"
        href="https://github.com/JoshDavies/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label='visit Josh Davies GitHub Profile'
      >
        <FontAwesomeIcon icon={['fab', 'github-square']} /> Josh Davies
      </a>
    </p>
    <p>
      <a
        className="repo-link"
        href="https://github.com/JoshDavies/theme-builder/tree/main"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Repo
      </a>
    </p>
  </footer>
);

export default Footer;
