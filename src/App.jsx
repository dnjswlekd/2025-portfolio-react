import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from './pages/HomePage';
import AboutMe from './pages/AboutPage';
import Skill from './pages/SkillPage';
import Work from './pages/WorkPage';
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
    <Router>
      {' '}
      {/* Router로 감싸기 */}
      <div className={`App ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
