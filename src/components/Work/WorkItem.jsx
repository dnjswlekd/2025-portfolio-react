import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/WorkItem.scss';

gsap.registerPlugin(ScrollTrigger);

const SectionWork = ({ data, sectionRef }) => {
  const {
    sectionClass,
    link,
    imageSrc,
    title,
    duration,
    skills,
    tasks,
    features,
    contribution,
  } = data;

  useEffect(() => {
    if (!sectionRef.current) return; // DOM이 없으면 종료

    const ctx = gsap.context(() => {
      gsap.from(`.${sectionClass} .work-title`, {
        scrollTrigger: {
          trigger: `.${sectionClass} .work-title`,
          start: 'top 100%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(`.${sectionClass} .desc-wrap .text-box`, {
        scrollTrigger: {
          trigger: `.${sectionClass} .text-box`,
          start: 'top 100%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      });

      gsap.from(`.${sectionClass} .img-wrap .preview`, {
        scrollTrigger: {
          trigger: `.${sectionClass} .img-wrap`,
          start: 'top 90%',
        },
        scale: 1.3,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionClass, sectionRef]);

  return (
    <section className={`work-item ${sectionClass}`} ref={sectionRef}>
      <div className="inner">
        <ul className="content-box">
          <li className="img-wrap">
            <a
              href={link}
              className="preview"
              target="_blank"
              rel="noopener noreferrer"
              data-contribution={`기여도 ${contribution}`}
            >
              <p className="img">
                <img src={imageSrc} alt={title} />
              </p>
            </a>
          </li>
          <li className="desc-wrap">
            <div className="desc text-box">
              <div className="intro work-title">
                <span>{duration}</span>
                <h3>{title}</h3>
              </div>
              <div className="explain">
                <h4>기술 스택</h4>
                {skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
              <div className="explain">
                <h4>주요 역할</h4>
                {tasks.map((task, index) => (
                  <span key={index}>{task}</span>
                ))}
              </div>
              {features && (
                <div className="explain">
                  <h4>주요 기능</h4>
                  {features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                  ))}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionWork;
