import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import './styles/main.scss';

function App() {
  // 테마 상태 관리
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // 테마 변경 함수
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // 테마 변경 시 body 클래스 변경
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
