import React from 'react';
import './Header.css';

function Header() {
  return (
      <header>
        <div>
          <p className="name">Jenny Cooke</p>
          <p className="tagline">Styling the web</p>
        </div>
        <div>
          <a
            href="https://www.instagram.com/jcooke1986/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Instagram
          </a>
          <a
            href="https://github.com/jcooke1986uk"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
              Github
          </a>
          <a 
            href="https://www.linkedin.com/in/jenny-cooke-6ba13058/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            LinkedIn
          </a>
        </div>
      </header>
  );
}

export default Header;
