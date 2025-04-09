import React from 'react';
import './styles/ProjectContent.scss';

function ProjectContent({ imageSrc, title, desc }) {
  return (
    <div className="project-content">
      <div>
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ProjectContent;
