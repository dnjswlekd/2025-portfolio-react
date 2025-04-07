// components/ScrollTopButton.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import './styles/ScrollTopButton.scss';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setVisible(scrollY > 900);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className={`scroll-top-btn ${visible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default ScrollTopButton;
