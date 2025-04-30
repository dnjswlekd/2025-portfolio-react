import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faBullhorn,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './LoadingModal.scss';

function LoadingModal({ setLoading }) {
  const handleClose = () => {
    setLoading(false);
  };

  const handleDoNotShowToday = () => {
    const now = new Date();
    const expiry = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24시간 후
    localStorage.setItem('hideModalUntil', expiry.toISOString());
    setLoading(false);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setLoading(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [setLoading]);

  return (
    <div className="modal">
      <div className="modal-wrap">
        <div className="modal-box modal-front">
          <FontAwesomeIcon icon={faLaptopCode} className="modal-icon" />
          <h1>Wonji's Portfolio</h1>
          <h2>
            이 사이트는 포트폴리오용으로 제작되었으며
            <br />
            리소스는 박원지에게 있습니다.
          </h2>
          <span>본 사이트는 Chrome에 최적화 되어있습니다.</span>
          <p>* 모달을 클릭해보세요!</p>
        </div>

        <div className="modal-box modal-back">
          <ul className="modal-list">
            <h3>
              <FontAwesomeIcon icon={faBullhorn} className="modal-icon" />
              <u>이렇게 제작하였습니다</u> :)
            </h3>
            <li>
              1. <b>React (JSX)</b>를 사용하여 컴포넌트 기반으로 개발하였습니다.
            </li>
            <li>
              2. <b>SCSS</b>를 활용하여 스타일을 모듈화하고 유지보수성을
              높였습니다.
            </li>
            <li>
              3. <b>다크모드 / 라이트모드</b> 전환 기능을 적용하였습니다.
            </li>
            <li>
              4. <b>반응형</b> 웹 디자인을 적용하였습니다.
            </li>
          </ul>

          <div className="modal-buttons">
            <button className="modal-close" onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <button
              className="modal-today-close"
              onClick={handleDoNotShowToday}
            >
              하루 동안 보지 않음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingModal;
