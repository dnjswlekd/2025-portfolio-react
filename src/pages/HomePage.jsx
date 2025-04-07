import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/Buttons/Button';

import Main from '@/components/Home/HomeMain';
import AboutMe from '@/components/Home/HomeAboutMe';
import Skill from '@/components/Home/HomeSkill';
import Work from '@/components/Home/HomeWork';
import Contact from '@/components/Home/HomeContact';

function Home({ theme }) {
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
        <AboutMe theme={theme} />
      </div>
      <Skill />
      <Work />
      <Contact />
    </div>
  );
}

export default Home;
