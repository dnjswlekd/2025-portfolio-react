import React from 'react';
import './styles/WorkContent.scss';

const WorkContent = ({
  link,
  imageSrc,
  title,
  duration,
  skills,
  tasks,
  features,
  contribution,
}) => {
  return (
    <div className="work-content">
      <a
        href={link}
        className="preview"
        target="_blank"
        rel="noopener noreferrer"
        data-contribution={`기여도 ${contribution}`}
      >
        <img src={imageSrc} alt={title} />
      </a>
      <div className="desc">
        <div className="intro">
          <span>{duration}</span>
          <h3>{title}</h3>
        </div>
        <div className="explain">
          <h4>기술 스택</h4>
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
        <div className="explain">
          <h4>주요 역할</h4>
          {tasks.map((task, index) => (
            <span key={index}>{task}</span>
          ))}
        </div>
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
  );
};

export default WorkContent;
