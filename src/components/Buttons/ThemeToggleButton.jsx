import React, { useState, useEffect } from 'react';
import lightModeIcon from '@/assets/icons/lightMode.png';
import darkModeIcon from '@/assets/icons/darkMode.png';

function ThemeToggleButton({ theme, toggleTheme }) {
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    setRotating(true);
    setTimeout(() => {
      setRotating(false);
    }, 100);
  }, [theme]);

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      <div
        className={`theme-toggle-icon ${rotating ? 'rotating' : ''} ${
          theme === 'light' ? 'rotate-right' : 'rotate-left'
        }`}
      >
        {/* 라이트/다크 모드에 맞는 아이콘 */}
        <img
          src={theme === 'light' ? lightModeIcon : darkModeIcon}
          alt={theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        />
      </div>
    </button>
  );
}

export default ThemeToggleButton;
