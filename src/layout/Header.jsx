import React from 'react';
import { NavLink } from 'react-router-dom';
import '@/layout/styles/header.scss';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="inner">
        <h1>wonji logo</h1>
        <div className="menu">
          <nav>
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skill"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/work"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Work
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
