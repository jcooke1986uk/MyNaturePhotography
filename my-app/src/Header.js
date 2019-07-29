import React from 'react';
import './Header.css';

function Header() {
  return (
      <header>
        <img src="images/logo-colour.jpeg" alt="Logo here one day"/>
        <div>
          <a href="https://github.com/jcooke1986uk" target="_blank" class="button">Github</a>
          <a href="https://www.instagram.com/jcooke1986/" target="_blank" class="button">Instagram</a>
          <a href="https://www.linkedin.com/in/jenny-cooke-6ba13058/" target="_blank" class="button">LinkedIn</a>
        </div>
      </header>
  );
}

export default Header;
