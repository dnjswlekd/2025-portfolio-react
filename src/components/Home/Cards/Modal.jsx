import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.scss';

const Modal = ({ data, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const { title, duration, skills, tasks, features, imageSrc, contribution } =
    data;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="modal-work-content">
          <div
            className="modal-img"
            data-contribution={`기여도 ${contribution}`}
          >
            <img src={imageSrc} alt={title} />
          </div>

          <div className="modal-desc">
            <div className="intro">
              <span>{duration}</span>
              <h3>{title}</h3>
            </div>

            {skills && (
              <div className="explain">
                <h4>기술 스택</h4>
                {skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            )}

            {tasks && (
              <div className="explain">
                <h4>주요 역할</h4>
                {tasks.map((task, index) => (
                  <span key={index}>{task}</span>
                ))}
              </div>
            )}

            {features && (
              <div className="explain">
                <h4>주요 기능</h4>
                {features.map((feature, index) => (
                  <span key={index}>{feature}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
