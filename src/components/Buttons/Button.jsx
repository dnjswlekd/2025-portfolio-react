import React from 'react';
import './styles/Button.scss';

function ScrollButton({ onClick, label }) {
  return (
    <div className="primary-button">
      <button onClick={onClick}>{label}</button>
    </div>
  );
}

export default ScrollButton;
