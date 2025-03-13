import React, { useState } from 'react';
import lightModeIcon from '@/assets/icons/lightMode.png'; // light 모드 이미지
import darkModeIcon from '@/assets/icons/darkMode.png'; // dark 모드 이미지

function ThemeToggleButton({ theme, toggleTheme }) {
  const [isRotating, setIsRotating] = useState(false);

  // 클릭 시 회전 상태 변경
  const handleClick = () => {
    setIsRotating(true); // 회전 시작
    setTimeout(() => setIsRotating(false), 300); // 300ms 후 회전 상태 리셋
    toggleTheme(); // 테마 변경
  };

  return (
    <button className="theme-toggle-btn" onClick={handleClick}>
      <img
        src={theme === 'light' ? lightModeIcon : darkModeIcon}
        alt="Theme Toggle"
        className={`theme-toggle-icon ${isRotating ? 'rotating' : ''}`}
      />
    </button>
  );
}

export default ThemeToggleButton;
