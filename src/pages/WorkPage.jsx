import React, { useRef } from 'react';
import WorkItem from '@/components/Work/WorkItem';
import ProjectItem from '@/components/Work/ProjectItem';

import './styles/Work.scss';

const sectionDataList = [
  {
    type: 'work',
    sectionClass: 'section01',
    title: '병원전용 그룹웨어 ',
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4',
    imageSrc: 'src/assets/images/그룹웨어.png',
    duration: '2023.07 ~ 2025.01',
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
    type: 'work',
    sectionClass: 'section02',
    title: '병원전용 메신저 시스템',
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4',
    imageSrc: 'src/assets/images/메신저.png',
    duration: '2023.07 ~ 2025.01',
    skills: ['vue.js', 'Composition API', 'Kendo UI Library'],
    tasks: ['디자인', '퍼블리싱', '리디자인', '유지보수'],
    contribution: '40%',
  },
  {
    type: 'work',
    sectionClass: 'section02',
    imageSrc: 'src/assets/images/주차관제.png',
    title: '병원전용 주차관제 시스템 (모바일)',
    duration: '2023.10 ~ 2024.02',
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
    type: 'work',
    sectionClass: 'section02',
    imageSrc: 'src/assets/images/대명스페셜라이프.png',
    title: 'E-브로슈어 쇼핑몰 메인, 상세페이지',
    duration: '2024.11',
    skills: ['HTML', 'CSS', 'JQuery', 'REST API'],
    tasks: ['리디자인', '퍼블리싱', '유지보수'],
    features: ['메인페이지', '상세페이지', '반응형'],
    contribution: '100%',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/homeWork-insight-main.png',
    title: 'The Dopda',
    duration: '2023.10 ~ 2024.02',
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
    type: 'project',
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/homeWork-interpark.png',
    title: 'The Dopda',
    duration: '2023.10 ~ 2024.02',
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
    type: 'project',
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/work-design-system.png',
    title: 'The Dopda',
    duration: '2023.10 ~ 2024.02',
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
    type: 'project',
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/work-design-system.png',
    title: 'The Dopda',
    duration: '2023.10 ~ 2024.02',
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
    type: 'project',
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/work-b2b.png',
    title: 'The Dopda',
    duration: '2023.10 ~ 2024.02',
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
    type: 'project',
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/work-b2c.png',
    title: 'The Dopda',
    duration: '2023.10 ~ 2024.02',
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
    type: 'project',
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/work-ott.png',
    title: '병원전용 주차관제 시스템 (모바일)',
    duration: '2023.10 ~ 2024.02',
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
];

function Work() {
  // type 기준으로 분리
  const workItems = sectionDataList.filter((item) => item.type === 'work');
  const projectItems = sectionDataList.filter(
    (item) => item.type === 'project'
  );

  const workRefs = useRef(workItems.map(() => React.createRef()));
  const projectRefs = useRef(projectItems.map(() => React.createRef()));

  return (
    <div className="work-page">
      <div className="inner">
        <div>
          <h1 className="title">Work & Project</h1>
          <div className="badge"></div>
        </div>
        <section className="work-section">
          {/* <h1>Work</h1> */}
          <div className="work-section-wrap">
            {workItems.map((data, index) => (
              <WorkItem
                key={`work-${index}`}
                data={data}
                sectionRef={workRefs.current[index]}
              />
            ))}
          </div>
        </section>
        <section className="project-section">
          <div className="project-layout">
            {projectItems.map((data, index) => (
              <WorkItem
                key={`project-${index}`}
                data={data}
                sectionRef={projectRefs.current[index]}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Work;
