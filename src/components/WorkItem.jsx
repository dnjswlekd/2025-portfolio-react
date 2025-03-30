// components/WorkItem.jsx
import React from 'react';

function WorkItem({ imgSrc, title, category, year }) {
  return (
    <li>
      <a href="#">
        <div className="img-box">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="text-box">
          <h3>{title}</h3>
          <div className="info">
            <p>{category}</p>
            <p>{year}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default WorkItem;
