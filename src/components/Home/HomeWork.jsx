import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Buttons/Button';
import WorkItem from '@/components/WorkItem';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '@/components/Home/styles/HomeWork.scss';

// 이미지 import
import interpark from '@/assets/images/homeWork-interpark.png';
import naver from '@/assets/images/homeWork-naver.png';
import insightMain from '@/assets/images/homeWork-insight-main.png';
import insightDetail from '@/assets/images/homeWork-insight-detail.png';
import insightCategory from '@/assets/images/homeWork-insight-category.png';
import B2Bdark from '@/assets/images/homeWork-b2c-dark.png';
import B2Blight from '@/assets/images/homeWork-b2c-light.png';

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
          end: '100% 0%',
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
          <p>work</p>
        </div>
        <ul className="work-list">
          {[
            {
              imgSrc: interpark,
              title: 'Interpark',
              category: 'UI/UX Design, Web Publishing',
              year: '2025',
            },
            {
              imgSrc: naver,
              title: 'Naver',
              category: 'UI/UX Design, Web Publishing',
              year: '2025',
            },
            {
              imgSrc: insightMain,
              title: 'Insight Main',
              category: 'UI/UX Design, Web Publishing',
              year: '2025',
            },
            {
              imgSrc: insightDetail,
              title: 'Insight Detail',
              category: 'UI/UX Design, Web Publishing',
              year: '2025',
            },
            {
              imgSrc: insightCategory,
              title: 'Insight Category',
              category: 'UI/UX Design, Web Publishing',
              year: '2025',
            },
            {
              imgSrc: B2Bdark,
              title: 'B2B Dark',
              category: 'UI/UX Design, Web Publishing',
              year: '2025',
            },
            {
              imgSrc: B2Blight,
              title: 'B2B Light',
              category: 'UI/UX Design, Web Publishing',
              year: '2025',
            },
          ].map((item, index) => (
            <WorkItem
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              category={item.category}
              year={item.year}
            />
          ))}
        </ul>
      </div>
      <Link to="/work">
        <Button label="View More" />
      </Link>
    </div>
  );
}

export default HomeWork;
