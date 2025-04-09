import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/Section01.scss';

gsap.registerPlugin(ScrollTrigger);

const Section01 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.title', {
        scrollTrigger: {
          trigger: '.title',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from('.text-box', {
        scrollTrigger: {
          trigger: '.text-box',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      });

      gsap.from('.skill li', {
        scrollTrigger: {
          trigger: '.skill',
          start: 'top 85%',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power1.out',
        delay: 0.5,
      });

      gsap.from('.img img', {
        scrollTrigger: {
          trigger: '.img',
          start: 'top 90%',
        },
        scale: 1.3,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section className="section01" ref={sectionRef}>
      {' '}
      <div className="inner">
        <ul className="content-box">
          <li className="left">
            <a href="#">
              <p className="img">
                <img src="src/assets/images/그룹웨어.png" alt="Mockup" />
              </p>
            </a>
          </li>
          <li className="right">
            <h2
              className="title en animate"
              data-animate="motion"
              data-splitting
            >
              Daebang <span>Undurstry</span>
            </h2>
            <div className="text-box animate" data-animate="motion">
              <p className="eng en1">
                In order to improve understanding of the layout, I personally
                cloned website, which uses a lot of animation and various
                layout.
              </p>
              <p className="kor en3">
                Box구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해
                국내 기업사이트 중 2023년 트렌드에 맞고 인터렉션 구현이 화려하며
                비쥬얼적으로 탁월한 웹사이트를 선정하여 Clone Coding으로
                퍼블리싱 실력을 키우기 위해 노력하였습니다.
              </p>
              <ul className="skill en">
                <li>HTML CSS MarkUp ↗</li>
                <li>JavaScript JQuery ↗</li>
                <li>PC Web ↗</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section01;
