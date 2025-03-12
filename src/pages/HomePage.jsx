import React from 'react';
import HomeMain from '@/components/HomeMain';
import HomeAboutMe from '@/components/HomeAboutMe';
import HomeSkill from '@/components/HomeSkill';
import HomeWork from '@/components/HomeWork';

function Home() {
  return (
    <div className="home">
      <HomeMain />
      <HomeAboutMe />
      <HomeSkill />
      <HomeWork />
    </div>
  );
}

export default Home;
