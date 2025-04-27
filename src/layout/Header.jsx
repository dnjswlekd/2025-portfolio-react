import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from '@/components/Buttons/ThemeToggleButton';
import '@/layout/styles/header.scss';

import LogoWhite from '@/assets/images/logo-w.png';
import LogoBlack from '@/assets/images/logo-b.png';

function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/skill', label: 'Skills' },
    { to: '/work', label: 'Work & Project' },
  ];

  const logoSrc = theme === 'dark' ? LogoBlack : LogoWhite;

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <header className="header">
      <div className="inner">
        <div className="menu">
          <NavLink to="/" className="logo">
            <img src={logoSrc} alt="WONJI 로고" />
          </NavLink>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {menuOpen && (
            <nav className="mobile-nav">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      aria-current={
                        link.to === window.location.pathname
                          ? 'page'
                          : undefined
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            </nav>
          )}

          <nav className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    aria-current={
                      link.to === window.location.pathname ? 'page' : undefined
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;
