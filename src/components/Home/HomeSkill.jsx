import React from 'react';
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
      <div className="inner">
        <div className="develop">
          <h2>I can do</h2>
          <ul>
            {skills.develop.map((skill) => (
              <li key={skill}>
                <img src={getImageUrl(skill)} alt={skill} />
              </li>
            ))}
          </ul>
        </div>
        <div className="design">
          <h2>and I can do too</h2>
          <ul>
            {skills.design.map((skill) => (
              <li key={skill}>
                <img src={getImageUrl(skill)} alt={skill} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function HomeAboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <div
      className={`section home-about animate ${
        inView ? 'animate-visible' : ''
      }`}
      ref={ref}
    >
      <div className="inner">
        <div>
          <h1 className="title">About Me</h1>
          <div className="badge"></div>
        </div>
        <div className="content">
          {/* 'SkillSection'을 여기서 사용 */}
          <SkillSection />
        </div>
      </div>
    </div>
  );
}

export default HomeAboutMe;
