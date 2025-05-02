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

// 이미지 import
import GroupwareImg from '@/assets/images/groupware.png';
import MessengerImg from '@/assets/images/messenger.png';
import ParkingImg from '@/assets/images/parking.png';
import BrochureImg from '@/assets/images/ebrochure.png';

import InsightImg from '@/assets/images/homeWork-insight-main.png';
import InterparkImg from '@/assets/images/homeWork-interpark.png';
import DesignSystemImg from '@/assets/images/work-design-system.png';
import B2BImg from '@/assets/images/work-b2b.png';
import B2CImg from '@/assets/images/work-b2c.png';
import OttImg from '@/assets/images/work-ott.png';

const sectionDataList = [
  {
    type: 'work',
    sectionClass: 'section01',
    title: '병원전용 그룹웨어 ',
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4',
    imageSrc: GroupwareImg,
    duration: '2023.07 ~ 2025.01',
    skills: ['vue.js', 'Options API', 'Kendo UI Library'],
    tasks: ['기획', '디자인', '퍼블리싱', '리디자인', '유지보수'],
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
    link: 'https://www.notion.so/1e4ecdd53fa480cbb20ae04a9a676163?pvs=4',
    imageSrc: MessengerImg,
    duration: '2024.02 ~ 2024.08',
    skills: ['vue.js', 'Composition API', 'Kendo UI Library'],
    tasks: ['기획', '디자인', '퍼블리싱'],
    contribution: '40%',
  },
  {
    type: 'work',
    sectionClass: 'section01',
    title: '병원전용 주차관제 시스템 (모바일)',
    link: 'https://www.notion.so/UI-UX-1a2ecdd53fa480018b48d0e1dad6ff4e?pvs=4',
    imageSrc: ParkingImg,
    duration: '2023.10 ~ 2024.02',
    skills: ['vue.js', 'Composition API'],
    tasks: ['기획', '퍼블리싱', '리디자인', '유지보수'],
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
    imageSrc: BrochureImg,
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
    imageSrc: InsightImg,
    title: '강의 플랫폼 UI/UX 디자인 및 퍼블리싱',
    desc: '피그마로 UI를 설계하고 컴포넌트 기반으로 구조화한 후, Vue.js와 SCSS로 반응형 퍼블리싱한 강의 사이트입니다.',
    figmaLink:
      'https://www.figma.com/design/i7LessEiDIKX96l8QxymFa/Beyond-Insight?node-id=87-1082&t=4mnakiN4m58PrcJa-1',
    link: 'https://dnjswlekd.github.io/flexible-web/',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: InterparkImg,
    title: '인터파크 클론코딩',
    desc: 'HTML, CSS, jQuery를 사용해 인터파크 웹사이트를 클론코딩하고, REST API 형식을 참고해 퍼블리싱했습니다.',
    link: 'https://dnjswlekd.github.io/interpark-clone/index.html',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: DesignSystemImg,
    title: '피그마를 활용한 디자인 시스템 설계',
    desc: 'Primitive, Semantic, Theme 컬러를 체계적으로 구성하고, 브랜드 컬러, 이펙트, Border, Spacing, 타이포그래피 등 디자인 토큰을 직접 설계해 디자인 시스템의 기초를 구축했습니다.',
    figmaLink:
      'https://www.figma.com/design/6GMoKknGsvcGFedxvrEmwQ/Design-System-Guide---Publish?node-id=2013-34&t=iK4EkjfBOKVcnc3B-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: DesignSystemImg,
    title: 'UI 워크스페이스 제작 및 컴포넌트화',
    desc: '디자인 시스템을 기반으로 Label, Checkbox, Modal, Side Navigation, Pagination 등 주요 UI 요소를 컴포넌트화하여 재사용 가능한 UI 라이브러리를 구축했습니다.',
    figmaLink:
      'https://www.figma.com/design/gjjNUveQLWPu4tT7yBWHcQ/UI-Workspace?node-id=18-1933&t=oLVPf0pNpbAvT5pb-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: B2BImg,
    title: '디자인시스템을 활용한 B2B 사이트',
    desc: '디자인 시스템을 기반으로 정보 구조와 사용자 흐름을 고려해 B2B 환경에 적합한 UI를 설계했습니다.',
    figmaLink:
      'https://www.figma.com/design/EIjY7Bbrn2eBMF5voyTXG8/B2B-Admin?node-id=2-2&t=ASAZMsEljPhWZ9Qg-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: B2CImg,
    title: '디자인시스템을 활용한 B2C 사이트',
    desc: '사용자 친화적인 디자인 시스템을 바탕으로 강의 플랫폼 사용성을 고려한 B2C UI를 구성했습니다.',
    figmaLink:
      'https://www.figma.com/design/VbOysRQ7ADwpJV4GJLSXni/B2C-E-Learning-Platform?node-id=0-1&t=kdv6Sanyk80XnQGP-1',
  },
  {
    type: 'project',
    sectionClass: 'section02',
    imageSrc: OttImg,
    title: '디자인시스템을 활용한 Mobile OTT',
    desc: '모바일 사용 경험을 고려한 OTT UI를 디자인 시스템을 활용해 설계하고, 콘텐츠 중심의 레이아웃을 구성했습니다.',
    figmaLink:
      'https://www.figma.com/design/eJHivSf3RuKfhUb6DiHLV8/Mobile-OTT?node-id=0-1&t=IkWRJ7bc1dy0lELh-1',
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
                  그룹웨어 프로젝트에서 메일, 캘린더, 전자보고, 커뮤니티 등 9개
                  메뉴의 <br /> 기획과 디자인, 퍼블리싱을 담당했습니다.
                </p>
                <p>
                  또한, 병원 관계자와 개발자 간의 커뮤니케이션을 조율하며,
                  사용성과 기능성을 모두 <br /> 고려한 화면을 기획하고 구현하는
                  역량을 키웠습니다.
                </p>
                <p>
                  Vue 기반으로 설계부터 개발, 운영, 유지보수까지 전 과정을
                  맡으며, 서비스 전체 흐름을 <br /> 이해하고 안정적인 결과물을
                  만드는 실무 경험을 쌓았습니다. <br />
                  이후 메신저, 주차관제 시스템, e-브로셔 등 다양한 프로젝트를
                  이어가며, 각 서비스의 목적과 사용자에 최적화된 UI/UX를
                  설계하고 퍼블리싱하는 능력을 다졌습니다.
                </p>
                <p>
                  실무 전반을 아우르며, 사용자 중심의 인터페이스와 체계적인
                  마크업 구조를 구축한 경험은 문제 해결력, 커뮤니케이션 능력,
                  실무 중심 사고로 이어졌고, <br /> 퍼블리셔로서의 전문성과
                  확신을 갖게 해주었습니다.
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
