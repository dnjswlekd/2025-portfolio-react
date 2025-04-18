import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Button from '@/components/Buttons/Button';
import HomeWorkItem from '@/components/Home/Cards/HomeWorkItem';
import HomeProjectItem from '@/components/Home/Cards/HomeProjectItem';
import Modal from '@/components/Home/Cards/Modal';

import '@/components/Home/styles/HomeWork.scss';

const workData = [
  {
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4',
    imageSrc: 'src/assets/images/그룹웨어.png',
    title: '병원전용 그룹웨어',
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
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4',
    imageSrc: 'src/assets/images/메신저.png',
    title: '병원전용 메신저 시스템',
    duration: '2023.07 ~ 2025.01',
    skills: ['vue.js', 'Composition API', 'Kendo UI Library'],
    tasks: ['디자인', '퍼블리싱', '리디자인', '유지보수'],
    contribution: '40%',
  },
  {
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
    imageSrc: 'src/assets/images/대명스페셜라이프.png',
    title: 'E-브로슈어 쇼핑몰 메인, 상세페이지',
    duration: '2024.11',
    skills: ['HTML', 'CSS', 'JQuery', 'REST API'],
    tasks: ['리디자인', '퍼블리싱', '유지보수'],
    features: ['메인페이지', '상세페이지', '반응형'],
    contribution: '100%',
  },
];

const projectData = [
  {
    imageSrc: 'src/assets/images/homeWork-insight-main.png',
    title: '강의 플랫폼 UI/UX 디자인 및 퍼블리싱',
    desc: '피그마로 UI를 설계하고 컴포넌트 기반으로 구조화한 후, Vue.js와 SCSS로 반응형 퍼블리싱한 강의 사이트입니다.',
  },
  {
    imageSrc: 'src/assets/images/homeWork-interpark.png',
    title: '인터파크 클론코딩',
    desc: 'HTML, CSS, jQuery를 사용해 인터파크 웹사이트를 클론코딩하고, REST API 형식을 참고해 퍼블리싱했습니다.',
  },
  {
    imageSrc: 'src/assets/images/work-design-system.png',
    title: '피그마를 활용한 디자인 시스템 설계',
    desc: 'Primitive, Semantic, Theme 컬러를 체계적으로 구성하고, 브랜드 컬러, 이펙트, Border, Spacing, 타이포그래피 등 디자인 토큰을 직접 설계해 디자인 시스템의 기초를 구축했습니다.',
  },
  {
    imageSrc: 'src/assets/images/work-design-system.png',
    title: 'UI 워크스페이스 제작 및 컴포넌트화',
    desc: '디자인 시스템을 기반으로 Label, Checkbox, Modal, Side Navigation, Pagination 등 주요 UI 요소를 컴포넌트화하여 재사용 가능한 UI 라이브러리를 구축했습니다.',
  },
  {
    imageSrc: 'src/assets/images/work-b2b.png',
    title: '디자인시스템을 활용한 B2B 사이트',
    desc: '디자인 시스템을 기반으로 정보 구조와 사용자 흐름을 고려해 B2B 환경에 적합한 UI를 설계했습니다.',
  },
  {
    imageSrc: 'src/assets/images/work-b2c.png',
    title: '디자인시스템을 활용한 B2C 사이트',
    desc: '사용자 친화적인 디자인 시스템을 바탕으로 강의 플랫폼 사용성을 고려한 B2C UI를 구성했습니다.',
  },
  {
    imageSrc: 'src/assets/images/work-ott.png',
    title: '디자인시스템을 활용한 Mobile OTT',
    desc: '모바일 사용 경험을 고려한 OTT UI를 디자인 시스템을 활용해 설계하고, 콘텐츠 중심의 레이아웃을 구성했습니다.',
  },
];

function HomeWork() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: '-200px 0px',
  });
  const { ref: workRef, inView: workInView } = useInView();
  const { ref: projectRef, inView: projectInView } = useInView();

  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

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
          <article
            className={`work ${workInView ? 'animate-visible' : ''}`}
            ref={workRef}
          >
            <h2>Work</h2>
            <div className="contents">
              {workData.map((work, index) => (
                <HomeWorkItem
                  key={index}
                  {...work}
                  onClick={() => handleItemClick(work)}
                />
              ))}
            </div>
          </article>
          <article
            className={`project ${projectInView ? 'animate-visible' : ''}`}
            ref={projectRef}
          >
            {' '}
            <h2>Project</h2>
            <div className="contents">
              {projectData.map((project, index) => (
                <HomeProjectItem key={index} {...project} />
              ))}
            </div>
          </article>{' '}
        </div>
      </div>
      {isModalOpen && selectedWork && (
        <Modal data={selectedWork} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default HomeWork;
