import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from '@/components/Buttons/ThemeToggleButton';
import '@/layout/styles/header.scss';

function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴 상태 관리

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/skill', label: 'Skills' },
    { to: '/work', label: 'Work & Project' },
  ];

  const logoSrc =
    theme === 'dark'
      ? 'src/assets/images/logo-b.png'
      : 'src/assets/images/logo-w.png';

  // 모바일 메뉴 토글
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <header className="header">
      <div className="inner">
        <div className="menu">
          {/* 로고 클릭 시 홈으로 이동 */}
          <NavLink to="/" className="logo">
            <img src={logoSrc} alt="WONJI 로고" />
          </NavLink>

          {/* 모바일에서는 햄버거 버튼 */}
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* 모바일 메뉴 - 메뉴 열릴 때만 보임 */}
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

          {/* 데스크탑 메뉴 */}
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

          {/* 데스크탑에서도 테마 토글 버튼 */}
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;
