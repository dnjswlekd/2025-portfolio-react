import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/Buttons/Button';

import Main from '@/components/Home/HomeMain';
import AboutMe from '@/components/Home/HomeAboutMe';
import Skill from '@/components/Home/HomeSkill';
import Work from '@/components/Home/HomeWork';

function Home() {
  const aboutMeRef = useRef(null);

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="main">
      <Main onScrollToAboutMe={scrollToAboutMe} />
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <Link to="/about">
        <Button label="View More About Me" />
      </Link>
      <Skill />
      <Link to="/skill">
        <Button label="View More Skills" />
      </Link>
      <Work />
      <Link to="/work">
        <Button label="View More Work" />
      </Link>
    </div>
  );
}

export default Home;
