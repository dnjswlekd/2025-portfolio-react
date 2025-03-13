import React from 'react';
import { Link } from 'react-router-dom';
import '@/layout/styles/header.scss';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/skill">Skills</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>
      </nav>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
}

export default Header;
