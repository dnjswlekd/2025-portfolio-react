import React from 'react';
import { Link } from 'react-router-dom';

import Main from '@/components/HomeMain';
import AboutMe from '@/components/HomeAboutMe';
import Skill from '@/components/HomeSkill';
import Work from '@/components/HomeWork';

function Home() {
  return (
    <div className="home">
      <Main />
      <AboutMe />
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
