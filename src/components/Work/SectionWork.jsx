import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/SectionWork.scss';

gsap.registerPlugin(ScrollTrigger);

const SectionWork = ({ data, sectionRef }) => {
  const { sectionClass, imgSrc, title, span, eng, kor, skills } = data;

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

      gsap.from(`.${sectionClass} .skill li`, {
        scrollTrigger: {
          trigger: `.${sectionClass} .skill`,
          start: 'top 85%',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power1.out',
        delay: 0.5,
      });

      gsap.from(`.${sectionClass} .img img`, {
        scrollTrigger: {
          trigger: `.${sectionClass} .img`,
          start: 'top 90%',
        },
        scale: 1.3,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      });
    }, sectionRef); // ✅ 여기에 DOM이 연결된 ref 넘기기

    return () => ctx.revert();
  }, [sectionClass, sectionRef]);

  return (
    <section className={`work-section ${sectionClass}`} ref={sectionRef}>
      <div className="inner">
        <ul className="content-box">
          <li className="left">
            <a href="#">
              <p className="img">
                <img src={imgSrc} alt={title} />
              </p>
            </a>
          </li>
          <li className="right">
            <h2
              className="title en animate"
              data-animate="motion"
              data-splitting
            >
              {title}
              <br />
              <span>{span}</span>
            </h2>
            <div className="text-box animate" data-animate="motion">
              <p className="eng en1">{eng}</p>
              <p className="kor en3">{kor}</p>
              <ul className="skill en">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionWork;
