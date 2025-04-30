import React from 'react';
import './styles/HomeProjectItem.scss';
import figma from '@/assets/images/figma-icon.png';

function ProjectContent({ figmaLink, link, imageSrc, title, desc }) {
  const handleSiteClick = (e) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  };

  const handleFigmaClick = (e) => {
    e.stopPropagation();
    if (figmaLink) {
      window.open(figmaLink, '_blank');
    }
  };

  return (
    <div className="project-content">
      <div>
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className="anchor-btn">
          {link && <button onClick={handleSiteClick}>🔗 사이트로 이동</button>}
          {figmaLink && (
            <button onClick={handleFigmaClick}>
              <img src={figma} alt="figma-icon" />
              Figma로 이동
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
