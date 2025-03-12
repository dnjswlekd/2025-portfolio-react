import React from 'react';
import './styles/header.scss';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
}

export default Header;
