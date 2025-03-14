import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

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
        <button>View More About Me</button>
      </Link>
      <Skill />
      <Link to="/skill">
        <button>View More Skills</button>
      </Link>
      <Work />
      <Link to="/work">
        <button>View More Work</button>
      </Link>
    </div>
  );
}

export default Home;
