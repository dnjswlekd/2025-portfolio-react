import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/Section02.scss';

gsap.registerPlugin(ScrollTrigger);

const Section02 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section02 .title', {
        scrollTrigger: {
          trigger: '.section02 .title',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from('.section02 .text-box', {
        scrollTrigger: {
          trigger: '.section02 .text-box',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      });

      gsap.from('.section02 .skill li', {
        scrollTrigger: {
          trigger: '.section02 .skill',
          start: 'top 85%',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power1.out',
        delay: 0.5,
      });

      gsap.from('.section02 .img img', {
        scrollTrigger: {
          trigger: '.section02 .img',
          start: 'top 90%',
        },
        scale: 1.3,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sectionData = {
    imgSrc: '/img/mockup_02.png',
    title: 'The Dopda',
    span: 'Platform',
    eng: `In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.`,
    kor: `Box구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 국내 기업사이트 중 2023년 트렌드에 맞고 인터렉션 구현이 화려하며 비쥬얼적으로 탁월한 웹사이트를 선정하여 Clone Coding으로 퍼블리싱 실력을 키우기 위해 노력하였습니다.`,
    skills: ['HTML CSS MarkUp ↗', 'JavaScript JQuery ↗', 'PC Web ↗'],
  };

  return (
    <section className="section02" ref={sectionRef}>
      <div className="inner">
        <ul className="content-box">
          <li className="left">
            <a href="#">
              <p className="img">
                <img src={sectionData.imgSrc} alt="Mockup" />
              </p>
            </a>
          </li>
          <li className="right">
            <h2
              className="title en1 animate"
              data-animate="motion"
              data-splitting
            >
              {sectionData.title}
              <br />
              <span>{sectionData.span}</span>
            </h2>
            <div className="text-box animate" data-animate="motion">
              <p className="eng en1">{sectionData.eng}</p>
              <p className="kor en3">{sectionData.kor}</p>
              <ul className="skill en">
                {sectionData.skills.map((skill, index) => (
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

export default Section02;
