// src/components/Work/SectionWork.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import figma from '@/assets/images/figma-icon.png';

import './styles/ProjectItem.scss';

gsap.registerPlugin(ScrollTrigger);

const SectionWork = ({ data, sectionRef }) => {
  const { sectionClass, figmaLink, link, imageSrc, title, desc } = data;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(`.${sectionClass} h3`, {
        scrollTrigger: {
          trigger: `.${sectionClass} .content-box`,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(`.${sectionClass} .text-box`, {
        scrollTrigger: {
          trigger: `.${sectionClass} .img-wrap`,
          start: 'top 80%',
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
    <section className={`project-item ${sectionClass}`} ref={sectionRef}>
      <div className="inner">
        <ul className="content-box">
          <li className="img-wrap">
            {link ? (
              <a
                href={link}
                className="preview"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="img">
                  <img src={imageSrc} alt={title} />
                </p>
              </a>
            ) : (
              <div className="preview">
                <p className="img">
                  <img src={imageSrc} alt={title} />
                </p>
              </div>
            )}
          </li>
          <li className="desc-wrap">
            <div className="desc text-box">
              <div className="intro">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="anchor-btn">
                  {link && (
                    <button
                      onClick={() => window.open(link, '_blank')}
                      className="site-btn"
                    >
                      🔗 사이트 바로가기
                    </button>
                  )}
                  {figmaLink && (
                    <button
                      onClick={() => window.open(figmaLink, '_blank')}
                      className="figma-btn"
                    >
                      <img src={figma} alt="Figma 아이콘" />
                      Figma 바로가기
                    </button>
                  )}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionWork;
