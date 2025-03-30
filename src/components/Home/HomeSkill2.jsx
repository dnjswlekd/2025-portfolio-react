import React from 'react';
import '@/components/Home/styles/HomeSkill2.scss';

function HomeSkill() {
  return (
    <section className="con03 animate" data-animate="motion">
      <div className="text-wrap">
        <div className="title">
          <p>
            my <span>skill</span>
          </p>
        </div>
        <ul>
          <li>
            <p>photoshop</p>
          </li>
          <li>
            <p>figma</p>
          </li>
          <li>
            <p>html/CSS</p>
          </li>
          <li>
            <p>javascript</p>
          </li>
          <li>
            <p>jquery</p>
          </li>
          <li>
            <p>vue</p>
          </li>
          <li>
            <p>react</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomeSkill;
