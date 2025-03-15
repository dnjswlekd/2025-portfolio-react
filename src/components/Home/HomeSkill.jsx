import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/Buttons/Button';

import '@/components/Home/styles/HomeSkill.scss';

function HomeSkill() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <div
      className={`section home-skill animate ${
        inView ? 'animate-visible' : ''
      }`}
      ref={ref}
    >
      <div className="inner">
        <div className="title-wrap">
          <div>
            <h1 className="title">Skills</h1>
            <div className="badge"></div>
          </div>
          <Link to="/skill">
            <Button label="View More" />
          </Link>
        </div>
        <div className="content">
          <div className="content-box"></div>
          <div className="content-box"></div>
          <div className="content-box"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeSkill;
