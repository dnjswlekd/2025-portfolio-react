import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SkillItem from '@/components/SkillItem';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '@/pages/styles/Skill.scss';

// 이미지 import
import html from '@/assets/images/html-icon.png';
import css from '@/assets/images/css-icon.png';
import javascript from '@/assets/images/js-icon.png';
import jquery from '@/assets/images/jquery-icon.png';
import vue from '@/assets/images/vue-icon.png';
import react from '@/assets/images/react-icon.png';
import sass from '@/assets/images/sass-icon.png';
import tailwind from '@/assets/images/tailwind-icon.png';

import figma from '@/assets/images/figma-icon.png';
import photoshop from '@/assets/images/photoshop-icon.png';
import illustrator from '@/assets/images/illustrator-icon.png';
import indesign from '@/assets/images/indesign-icon.png';

import notion from '@/assets/images/notion-icon.png';
import git from '@/assets/images/git-icon.png';
import gitlab from '@/assets/images/gitlab-icon.png';
import github from '@/assets/images/github-icon.png';
import sourcetree from '@/assets/images/sourcetree-icon.png';

// gsap 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function HomeWork() {
  useEffect(() => {
    // 첫 번째 애니메이션: 타이틀 애니메이션
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.work-inner',
          start: '0% 100%',
          end: '0% 20%',
          scrub: 1,
          markers: false,
        },
      })
      .fromTo(
        '.work-inner .title p:nth-child(1)',
        { x: '-100%' },
        { x: '0%', duration: 5, ease: 'none' },
        0
      )
      .fromTo(
        '.work-inner .title p:nth-child(2)',
        { x: '100%' },
        { x: '0%', duration: 5, ease: 'none' },
        0
      );

    // 두 번째 애니메이션: 작업 목록 배경, 타이틀 위치, 작업 목록 위치
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.work-list',
          start: '0% 100%',
          end: '0% 100%',
          scrub: 1,
          markers: false,
        },
      })
      .to(
        '.work-inner',
        {
          background: '#333',
          color: '#fff',
          paddingBlock: '30vh',
          ease: 'none',
          duration: 5,
        },

        0
      )
      .to(
        '.work-inner .title',
        {
          position: 'fixed',
          left: 0,
          top: 0,
          ease: 'none',
          duration: 5,
        },
        0
      )
      .fromTo(
        '.work-list',
        { margin: '0 auto' },
        {
          margin: '100vh auto 0 ',
          position: 'relative',
          zIndex: '10',
          duration: 1,
        },
        0
      );

    // 세 번째 애니메이션: 타이틀 위치 애니메이션
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.work-list',
          start: '100% 50%',
          end: '100% 100%',
          scrub: 1,
          markers: false,
        },
      })
      .to(
        '.work-inner .title p:nth-child(1)',
        { x: '-100%', duration: 5, ease: 'none' },
        0
      )
      .to(
        '.work-inner .title p:nth-child(2)',
        { x: '100%', duration: 5, ease: 'none' },
        0
      );
  }, []);

  return (
    // <div className="section home-work animate">
    <div>
      <div className="work-inner">
        <div className="title">
          <p>my</p>
          <p>skill</p>
        </div>
        <ul className="work-list">
          {[
            {
              imgSrc: html,
              title: '0',
              category: 'HTML',
            },
            {
              imgSrc: css,
              title: '1',
              category: 'CSS',
            },
            {
              imgSrc: javascript,
              title: '2',
              category: 'JavaScript',
            },
            {
              imgSrc: jquery,
              title: '3',
              category: 'JQuery',
            },
            {
              imgSrc: vue,
              title: '4',
              category: 'Vue',
            },
            {
              imgSrc: react,
              title: '5',
              category: 'React',
            },
            {
              imgSrc: sass,
              title: '6',
              category: 'SCSS(SASS)',
            },
            {
              imgSrc: tailwind,
              title: '7',
              category: 'Tailwind CSS',
            },
            {
              imgSrc: figma,
              title: '8',
              category: 'Figma',
            },
            {
              imgSrc: photoshop,
              title: '9',
              category: 'Photoshop',
            },
            {
              imgSrc: illustrator,
              title: '10',
              category: 'Illustrator',
            },
            {
              imgSrc: indesign,
              title: '11',
              category: 'Indesign',
            },
            {
              imgSrc: notion,
              title: '12',
              category: 'Notion',
            },
            {
              imgSrc: git,
              title: '13',
              category: 'Git',
            },
            {
              imgSrc: gitlab,
              title: '14',
              category: 'Gitlab',
            },
            {
              imgSrc: github,
              title: '15',
              category: 'Github',
            },
            {
              imgSrc: sourcetree,
              title: '16',
              category: 'Sourcetree',
            },
          ].map((item, index) => (
            <SkillItem
              key={index}
              imgSrc={item.imgSrc}
              title={`${String(index + 1).padStart(2, '0')}.`}
              category={item.category}
            />
          ))}
        </ul>
        {/* <Link to="/work">
          <Button label="View More" />
        </Link> */}
      </div>
    </div>
  );
}

export default HomeWork;
