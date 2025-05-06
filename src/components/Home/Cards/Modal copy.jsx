// ... 기존 import들은 그대로 유지
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ data, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const { title, skills, link, background, responsibilities, achievements } =
    data;

  const handleNotionClick = (e) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="modal-work-content">
          <h3>{title}</h3>
          <div className="modal-desc">
            {background && (
              <div className="explain">
                <h4>프로젝트 배경</h4>
                {background}
              </div>
            )}
            {responsibilities && (
              <div className="explain">
                <h4>주요 업무</h4>
                {responsibilities}
              </div>
            )}
            {achievements && (
              <div className="explain">
                <h4>주요 성과</h4>
                {achievements}
              </div>
            )}

            {skills && (
              <div className="explain">
                <h4>관련 기술</h4>
                {skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            )}
          </div>
          <div className="link-btn">
            {link && (
              <button onClick={handleNotionClick}>
                🔗 Notion <span> 바로가기</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
