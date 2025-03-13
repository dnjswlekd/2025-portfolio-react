import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from '@/components/Buttons/ThemeToggleButton';
import '@/layout/styles/header.scss';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="inner">
        <div className="menu">
          <h1>wonji logo</h1>
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
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;
