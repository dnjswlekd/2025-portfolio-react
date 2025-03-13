import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from '@/components/Buttons/ThemeToggleButton';
import '@/layout/styles/header.scss';

function Header({ theme, toggleTheme }) {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/skill', label: 'Skills' },
    { to: '/work', label: 'Blog' },
  ];

  return (
    <header className="header">
      <div className="inner">
        <div className="menu">
          {/* 로고를 클릭할 때 홈으로 이동하도록 변경 */}
          <NavLink to="/" className="logo">
            <h1>wonji logo</h1>
          </NavLink>
          <nav>
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
          {/* 테마 토글 버튼 */}
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;
