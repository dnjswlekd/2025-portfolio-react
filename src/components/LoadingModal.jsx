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

  useEffect(() => {
    // ESC 키 눌렀을 때 모달 닫기
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setLoading(false);
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener('keydown', handleEsc);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
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
              3. 최신 트렌드인 <b>다크모드 / 라이트모드</b> 전환 기능을
              적용하였습니다.
            </li>
            <li>
              4. <b>반응형(Responsive)</b> 웹 디자인을 적용하여 다양한
              기기에서도 최적화된 화면을 제공합니다.
            </li>
          </ul>
        </div>

        {/* 닫기 버튼 */}
        <button className="modal-close" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
}

export default LoadingModal;
