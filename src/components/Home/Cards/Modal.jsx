import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ data, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const {
    title,
    skills = [],
    link,
    background,
    responsibilities,
    achievements,
  } = data;

  const stopPropagation = (e) => e.stopPropagation();

  const handleNotionClick = (e) => {
    e.stopPropagation();
    if (link) window.open(link, '_blank');
  };

  const renderSection = (label, heading, content) => (
    <div className="content">
      <div className="index">
        <span>{label}</span>
        <h4>{heading}</h4>
      </div>
      <p>{content}</p>
    </div>
  );

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={stopPropagation}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="modal-work-content">
          <h3>{title}</h3>
          <div className="content-wrap">
            {renderSection('1.', '프로젝트 배경', background)}
            {renderSection('2.', '주요 업무', responsibilities)}
            {renderSection('3.', '주요 성과', achievements)}
            <div className="content skill">
              <h4>관련 기술</h4>
              {skills.map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
          {link && (
            <a className="go-notion" onClick={handleNotionClick}>
              <button>자세히 보기</button>
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
