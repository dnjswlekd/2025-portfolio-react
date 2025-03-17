import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/Buttons/Button';

import '@/components/Home/styles/HomeSkill.scss';

function HomeSkill() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.7,
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
          <div className="content-box">
            <span>1</span>
            <h1>web</h1>
            <p>html5, css3, js, jquery, vue, react, sass(scss)</p>
          </div>
          <div className="content-box">
            <span>2</span>
            <h1>design</h1>
            <p>figma, photoshop, illustrator, indesign</p>
          </div>
          <div className="content-box">
            <span>3</span>
            <h1>collaboration</h1>
            <p>notion, git, gitlab github, sourcetree</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSkill;
