import React from 'react';
import './Footer.css';

function Footer() {
  return (
      <footer>
        <div>
            <a
              href="https://www.instagram.com/jcooke1986/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://github.com/jcooke1986uk"
              target="_blank"
              rel="noopener noreferrer"
            >
                Github
            </a>
            <a 
              href="https://www.linkedin.com/in/jenny-cooke-6ba13058/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a 
                href="https://github.com/OrigenStudio/react-instagram-feed"
                target="_blank"
                rel="noopener noreferrer"
                className="origen"
              >
                Origen react instagram feed
              </a>
          </div>
      </footer>
  );
}

export default Footer;
