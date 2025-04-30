import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from './pages/HomePage';
import AboutMe from './pages/AboutPage';
import Skill from './pages/SkillPage';
import Work from './pages/WorkPage';

import ScrollToTop from './ScrollToTop';
import ScrollTopButton from '@/components/Buttons/ScrollTopButton';

import LoadingModal from '@/components/LoadingModal'; // 로딩 모달 컴포넌트 추가

function AnimatedRoutes({ theme }) {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <ScrollToTop />
          <ScrollTopButton />
          <Routes location={location}>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [loading, setLoading] = useState(false); // 초기 false

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // 하루 동안 모달 보지 않음 처리
  useEffect(() => {
    const hideUntil = localStorage.getItem('hideModalUntil');
    const now = new Date();

    if (!hideUntil || now > new Date(hideUntil)) {
      setLoading(true); // 모달을 보여줄 조건일 때만 true
    }
  }, []);

  return (
    <Router basename="/2025-portfolio-react/">
      <div className="frame">
        <div className="inner"></div>
      </div>
      <div className={`App ${theme}`}>
        {loading && <LoadingModal setLoading={setLoading} />}
        <Header theme={theme} toggleTheme={toggleTheme} />
        <AnimatedRoutes theme={theme} />
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
