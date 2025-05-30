import React from 'react';

function SkillItem({ imgSrc, title, category }) {
  return (
    <li>
      <div className="skill-box">
        <h3 className="index">{title}</h3>
        <div className="img-box">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="text-box">
          <div className="info">
            <p>{category}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SkillItem;
