import React, { useRef } from 'react';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

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
    sectionClass: 'section01',
    title: '병원전용 메신저 시스템',
    link: 'https://www.notion.so/1caecdd53fa4808691e6ff3c2ae8dd8a?pvs=4',
    imageSrc: 'src/assets/images/메신저.png',
    duration: '2023.07 ~ 2025.01',
    skills: ['vue.js', 'Composition API', 'Kendo UI Library'],
    tasks: ['디자인', '퍼블리싱', '리디자인', '유지보수'],
    contribution: '40%',
  },
  {
    type: 'work',
    sectionClass: 'section01',
    title: '병원전용 주차관제 시스템 (모바일)',
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa480018b48d0e1dad6ff4e?pvs=4',
    imageSrc: 'src/assets/images/주차관제.png',
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
    sectionClass: 'section01',
    title: 'E-브로슈어 쇼핑몰 메인, 상세페이지',
    imageSrc: 'src/assets/images/대명스페셜라이프.png',
    link: 'https://www.notion.so/e-1a2ecdd53fa480ad9d30d721d66c9aee?pvs=4',
    duration: '2024.11',
    skills: ['HTML', 'CSS', 'JQuery', 'REST API'],
    tasks: ['리디자인', '퍼블리싱', '유지보수'],
    features: ['메인페이지', '상세페이지', '반응형'],
    contribution: '100%',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: 'src/assets/images/homeWork-insight-main.png',
    title: '강의 플랫폼 UI/UX 디자인 및 퍼블리싱',
    desc: '피그마로 UI를 설계하고 컴포넌트 기반으로 구조화한 후, Vue.js와 SCSS로 반응형 퍼블리싱한 강의 사이트입니다.',
    link: 'https://www.figma.com/design/i7LessEiDIKX96l8QxymFa/Beyond-Insight?node-id=87-1082&t=4mnakiN4m58PrcJa-1',
    linkPage: 'https://dnjswlekd.github.io/flexible-web/',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: 'src/assets/images/homeWork-interpark.png',
    title: '인터파크 클론코딩',
    desc: 'HTML, CSS, jQuery를 사용해 인터파크 웹사이트를 클론코딩하고, REST API 형식을 참고해 퍼블리싱했습니다.',
    link: 'https://dnjswlekd.github.io/interpark-clone/index.html',
    linkPage: 'https://dnjswlekd.github.io/interpark-clone/index.html',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: 'src/assets/images/work-design-system.png',
    title: '피그마를 활용한 디자인 시스템 설계',
    desc: 'Primitive, Semantic, Theme 컬러를 체계적으로 구성하고, 브랜드 컬러, 이펙트, Border, Spacing, 타이포그래피 등 디자인 토큰을 직접 설계해 디자인 시스템의 기초를 구축했습니다.',
    link: 'https://www.figma.com/design/6GMoKknGsvcGFedxvrEmwQ/Design-System-Guide---Publish?node-id=2013-34&t=iK4EkjfBOKVcnc3B-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: 'src/assets/images/work-design-system.png',
    title: 'UI 워크스페이스 제작 및 컴포넌트화',
    desc: '디자인 시스템을 기반으로 Label, Checkbox, Modal, Side Navigation, Pagination 등 주요 UI 요소를 컴포넌트화하여 재사용 가능한 UI 라이브러리를 구축했습니다.',
    link: 'https://www.figma.com/design/gjjNUveQLWPu4tT7yBWHcQ/UI-Workspace?node-id=18-1933&t=oLVPf0pNpbAvT5pb-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: 'src/assets/images/work-b2b.png',
    title: '디자인시스템을 활용한 B2B 사이트',
    desc: '디자인 시스템을 기반으로 정보 구조와 사용자 흐름을 고려해 B2B 환경에 적합한 UI를 설계했습니다.',
    link: 'https://www.figma.com/design/EIjY7Bbrn2eBMF5voyTXG8/B2B-Admin?node-id=2-2&t=ASAZMsEljPhWZ9Qg-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: 'src/assets/images/work-b2c.png',
    title: '디자인시스템을 활용한 B2C 사이트',
    desc: '사용자 친화적인 디자인 시스템을 바탕으로 강의 플랫폼 사용성을 고려한 B2C UI를 구성했습니다.',
    link: 'https://www.figma.com/design/VbOysRQ7ADwpJV4GJLSXni/B2C-E-Learning-Platform?node-id=0-1&t=kdv6Sanyk80XnQGP-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: 'src/assets/images/work-ott.png',
    title: '디자인시스템을 활용한 Mobile OTT',
    desc: '모바일 사용 경험을 고려한 OTT UI를 디자인 시스템을 활용해 설계하고, 콘텐츠 중심의 레이아웃을 구성했습니다.',
    link: 'https://www.figma.com/design/eJHivSf3RuKfhUb6DiHLV8/Mobile-OTT?node-id=0-1&t=IkWRJ7bc1dy0lELh-1',
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-section', {
        scrollTrigger: {
          trigger: '.work-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
      });
      gsap.from('.project-section', {
        scrollTrigger: {
          trigger: '.project-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from('.intro-text h1', {
        scrollTrigger: {
          trigger: '.intro-text',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="work-page">
      <div className="inner">
        <section className="work-section">
          <div className="intro">
            <div className="intro-text">
              <h1>Work</h1>
              <div className="desc">
                <p>
                  병원 전용 그룹웨어 프로젝트에서 메일, 캘린더, 전자보고,
                  커뮤니티 등 9개 시스템의 <br /> UI 설계와 퍼블리싱을 담당하며,
                  병원 관계자와 개발자 간의 커뮤니케이션을 통해 사용성과
                  기능성을 모두 고려한 화면을 기획하고 구현했습니다. Vue.js
                  기반으로 개발된 프로젝트는 설계부터 개발 완료, 유지보수까지 전
                  과정을 맡아 진행했으며, 이후 메신저, 주차관제 웹 시스템,
                  e-브로셔 페이지 작업까지 이어가며 각 프로젝트의 목적과 특성에
                  맞는 퍼블리싱과 UI 설계를 수행했습니다. <br /> 실무 전반을
                  아우르며 사용자 중심의 인터페이스와 체계적인 마크업 구조를
                  구축해왔습니다.
                </p>
                <span className="tooltip-wrapper">
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  <span className="tooltip">
                    이미지를 클릭하면 상세페이지로 이동합니다.
                  </span>
                </span>
              </div>
            </div>
          </div>
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
          <div className="intro">
            <div className="intro-text">
              <h1>Project</h1>
              <div className="desc">
                <p>
                  여러 프로젝트를 통해 피그마 디자인 시스템을 직접 구축하거나,
                  구축한 시스템을 기반으로 UI를 구성하고, 마크업을 체계적으로
                  구성해 웹표준에 맞춰 퍼블리싱까지 전체 과정을 경험했습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="project-section-wrap">
            {projectItems.map((data, index) => (
              <ProjectItem
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
