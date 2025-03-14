import React from 'react';
import '@/components/Home/styles/HomeAbout.scss';
import myProfileImg from '@/assets/images/myProfile.jpg';

function HomeAboutMe() {
  return (
    <div className="section home-about">
      <h1>HomeAboutMe</h1>
      <div className="profile-img">
        <img src={myProfileImg} alt="Profile Image" />
      </div>
    </div>
  );
}

export default HomeAboutMe;
