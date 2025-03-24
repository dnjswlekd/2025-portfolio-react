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

function AnimatedRoutes() {
  const location = useLocation();

  // nodeRef 객체 생성 (React 18에서 findDOMNode 대신 사용)
  const nodeRef = useRef(null);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef} // nodeRef 추가
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
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

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router basename="/2025-portfolio-react/">
      <div className="frame">
        <div className="inner"></div>
      </div>
      <div className={`App ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
