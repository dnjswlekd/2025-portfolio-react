import React from 'react';
import './styles/HomeProjectItem.scss';
import figma from '@/assets/images/figma-icon.png';

function ProjectContent({ linkPage, link, imageSrc, title, desc }) {
  const handleNotionClick = (e) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="project-content">
      <div>
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className="anchor-btn">
          {' '}
          {linkPage && (
            <button onClick={handleNotionClick}>🔗 사이트 바로가기</button>
          )}
          {link && (
            <button onClick={handleNotionClick}>
              <img src={figma} alt="figma-icon" />
              Figma 바로가기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
