// Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer: React.FunctionComponent = () => {
  return (
    <footer className='footer-container'>
      <h4>Follow me on social media:</h4>
      <div className="social-links">
        <a className='icon-cog fa-xl' href="https://github.com/pl01" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className='icon-cog fa-xl' href="https://www.linkedin.com/in/pablo-lara/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
