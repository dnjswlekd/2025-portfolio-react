import React, { useRef } from 'react';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

import WorkItem from '@/components/Work/WorkItem';
import ProjectItem from '@/components/Work/ProjectItem';

import workData from '@/data/workData';
import projectData from '@/data/projectData';

import './styles/Work.scss';

function Work() {
  const sectionRefs = useRef([]);

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
            {workData.map((data, index) => (
              <WorkItem
                key={index}
                data={data}
                sectionRef={
                  sectionRefs.current[index] ||
                  (sectionRefs.current[index] = React.createRef())
                }
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
                  여러 프로젝트를 통해 Figma 디자인 시스템을 직접 구축하고, 이를
                  활용해 UI를 구성했으며, 마크업 또한 체계적으로 정리해 웹
                  표준에 맞춘 퍼블리싱까지 진행했습니다.
                </p>
                <p>
                  이 과정에서 디자인 시스템 활용 능력, 정확하고 일관된 마크업
                  역량, <br /> 그리고 개발 흐름에 대한 실질적인 이해를
                  쌓았습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="project-section-wrap">
            {projectData.map((data, index) => (
              <ProjectItem
                key={index}
                data={data}
                sectionRef={
                  sectionRefs.current[index + workData.length] ||
                  (sectionRefs.current[index + workData.length] =
                    React.createRef())
                }
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Work;
