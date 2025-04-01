import React from 'react';
import '@/layout/styles/footer.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/skill', label: 'Skills' },
    { to: '/work', label: 'Work' },
  ];

  return (
    <footer className="footer">
      <div className="inner">
        <div className="left">
          <h1>WONJI</h1>
          <ul>
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
        </div>
        <div className="right">
          <p>
            본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
            <span> &copy; 2025 Won-Ji, Park. All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
