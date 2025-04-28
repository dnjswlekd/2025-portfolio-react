import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import figma from '@/assets/images/figma-icon.png';

import './styles/ProjectItem.scss';

gsap.registerPlugin(ScrollTrigger);

const SectionWork = ({ data, sectionRef }) => {
  const { sectionClass, linkPage, link, imageSrc, title, desc } = data;
  const handleNotionClick = (e) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return; // DOM이 없으면 종료

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
          trigger: `.${sectionClass} .img-wrap `,
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
          </li>
          <li className="desc-wrap">
            <div className="desc text-box">
              <div className="intro">
                <h3>{title}</h3>
                <p>{desc}</p>

                <div className="anchor-btn">
                  {' '}
                  {linkPage && (
                    <button onClick={handleNotionClick}>
                      🔗 사이트 바로가기
                    </button>
                  )}
                  {link && (
                    <button onClick={handleNotionClick}>
                      <img src={figma} alt="figma-icon" />
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
