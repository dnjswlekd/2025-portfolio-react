import React from 'react';
import './styles/HomeWorkItem.scss';

const HomeWorkItem = ({ imageSrc, title, contribution, onClick }) => {
  return (
    <div className="work-content" onClick={onClick}>
      <div className="preview" data-contribution={`기여도 ${contribution}`}>
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default HomeWorkItem;
