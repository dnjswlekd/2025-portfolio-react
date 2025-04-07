import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Button from '@/components/Buttons/Button';
import WorkContent from '@/components/Cards/WorkContent';

import '@/components/Home/styles/HomeWork.scss';

const workData = [
  {
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4',
    imageSrc: 'src/assets/images/그룹웨어.png',
    title: '병원전용 그룹웨어',
    duration: '2023.07 ~ 2025.01 (1년 6개월)',
    skills: ['vue.js', 'Options API', 'Kendo UI Library'],
    tasks: ['디자인', '퍼블리싱', '리디자인', '유지보수'],
    features: [
      '대시보드',
      '전자보고',
      '메일 (리디자인)',
      '캘린더/부서캘린더',
      '간호사 근무표 캘린더',
      '당직표 캘린더',
      '공유자원관리',
      '커뮤니티',
      '관리자 페이지',
    ],
    contribution: '100%',
  },
  {
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4',
    imageSrc: 'src/assets/images/메신저.png',
    title: '병원전용 메신저 시스템',
    duration: '2023.07 ~ 2025.01 (1년 6개월)',
    skills: ['vue.js', 'Composition API', 'Kendo UI Library'],
    tasks: ['디자인', '퍼블리싱', '리디자인', '유지보수'],
    contribution: '40%',
  },
  {
    imageSrc: 'src/assets/images/주차관제.png',
    title: '병원전용 주차관제 시스템 (모바일)',
    duration: '2023.10 ~ 2024.02 (4개월)',
    skills: ['vue.js', 'Composition API'],
    tasks: ['퍼블리싱', '리디자인', '유지보수'],
    features: [
      '입차/출차',
      'vip 입차 등록/관리',
      '주차이력',
      '주차정산',
      '주차 만족도 조사',
      '주차관제 대시보드',
      '환경설정',
      '반응형',
    ],
    contribution: '100%',
  },
  {
    imageSrc: 'src/assets/images/대명스페셜라이프.png',
    title: 'E-브로슈어 쇼핑몰 메인, 상세페이지',
    duration: '2024.11 (2주)',
    skills: ['HTML', 'CSS', 'JQuery', 'REST API'],
    tasks: ['리디자인', '퍼블리싱', '유지보수'],
    features: ['메인페이지', '상세페이지', '반응형'],
    contribution: '100%',
  },
];

function HomeWork() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <div
      className={`section home-work animate ${inView ? 'animate-visible' : ''}`}
      ref={ref}
    >
      <div className="inner">
        <div className="title-wrap">
          <div>
            <h1 className="title">Work & Project</h1>
            <div className="badge"></div>
          </div>
          <Link to="/work">
            <Button label="View More" />
          </Link>
        </div>
        <div className="container">
          <article>
            <h2>Work</h2>
            <div className="contents">
              {workData.map((work, index) => (
                <WorkContent key={index} {...work} />
              ))}
            </div>
          </article>
          <article>
            <h2>Project</h2>
            <div className="contents">
              <div>
                <a className="preview" target="_blank">
                  {/* <img src="src/assets/images/주차관제.png" alt="" /> */}
                </a>
                <h3>강의사이트 UI/UX 디자인 및 퍼블리싱</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>gsap을 활용한 인터랙티브 사이트</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>피그마를 활용한 디자인시스템 구축</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>디자인시스템을 활용한 B2B 사이트</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>디자인시스템을 활용한 B2C 사이트</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>디자인시스템을 활용한 모바일 OTT</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>인터파크 클론코딩</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>네이버 클론코딩</h3>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default HomeWork;
