import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/Buttons/Button';

import '@/components/Home/styles/HomeSkill.scss';

const SkillSection = () => {
  const skills = {
    develop: ['html', 'css', 'js', 'sass', 'jquery', 'vue', 'react'],
    design: [
      'figma',
      'photoshop',
      'illustrator',
      'indesign',
      'notion',
      'git',
      'gitlab',
      'github',
    ],
  };

  const getImageUrl = (name) => {
    return new URL(`/src/assets/images/${name}-icon.png`, import.meta.url).href;
  };

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
      <div>
        <h2>I can do</h2>
        <ul className="develop">
          {skills.develop.map((skill) => (
            <li key={skill}>
              <img src={getImageUrl(skill)} alt={skill} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>and I can do too</h2>
        <ul className="design">
          {skills.design.map((skill) => (
            <li key={skill}>
              <img src={getImageUrl(skill)} alt={skill} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

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
          <SkillSection />
        </div>
      </div>
    </div>
  );
}

export default HomeSkill;
