import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/ProjectItem.scss';

gsap.registerPlugin(ScrollTrigger);

const SectionWork = ({ data, sectionRef }) => {
  const { sectionClass, link, imageSrc, title, desc } = data;

  useEffect(() => {
    if (!sectionRef.current) return; // DOM이 없으면 종료

    const ctx = gsap.context(() => {
      gsap.from(`.${sectionClass} .title`, {
        scrollTrigger: {
          trigger: `.${sectionClass} .title`,
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
          trigger: `.${sectionClass} .text-box`,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      });

      gsap.from(`.${sectionClass} .anchor li`, {
        scrollTrigger: {
          trigger: `.${sectionClass} .anchor`,
          start: 'top 85%',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power1.out',
        delay: 0.5,
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
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionWork;
