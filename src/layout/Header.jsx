import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from '@/components/Buttons/ThemeToggleButton';

import '@/layout/styles/header.scss';

import LogoWhite from '@/assets/images/logo-w.png';
import LogoBlack from '@/assets/images/logo-b.png';

function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴 상태 관리

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/skill', label: 'Skills' },
    { to: '/work', label: 'Work & Project' },
  ];

  const logoSrc = theme === 'light' ? LogoWhite : LogoBlack;

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <header className="header">
      <div className={`inner ${menuOpen ? 'open' : ''}`}>
        <div className="menu">
          {/* 로고 */}
          <NavLink to="/" className="logo">
            <img src={logoSrc} alt="WONJI 로고" />
          </NavLink>

          {/* 데스크탑 메뉴 */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* 모바일 메뉴 영역 */}
          <div className="mobile-menu-wrap">
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            <div className="menu-toggle-wrap">
              <button
                className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
              >
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>
            <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
