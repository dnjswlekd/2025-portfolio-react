import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Buttons/Button';
import '@/pages/styles/About.scss';
import myProfileImg from '@/assets/images/myProfile.jpg';

gsap.registerPlugin(ScrollTrigger);

function HomeAboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const textBoxRef = useRef(null);

  useEffect(() => {
    if (inView && textBoxRef.current) {
      const elements = textBoxRef.current.querySelectorAll('p, li');

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textBoxRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );
    }
  }, [inView]); // inView가 변경될 때마다 실행

  return (
    <div
      className={`section home-about animate ${
        inView ? 'animate-visible' : ''
      }`}
      ref={ref}
    >
      <div className="inner">
        <div>
          <h1 className="title">About Me</h1>
          <div className="badge"></div>
        </div>
        <div className="content">
          <div className="profile">
            <div className="profile-img">
              <img src={myProfileImg} alt="Profile Image" />
            </div>
            {/* <Link to="/about">
              <Button label="자기소개 더보기" />
            </Link> */}
          </div>
          <div className="text-box" ref={textBoxRef}>
            <div className="signature">
              <img src="src/assets/images/signature.png" alt="" />
            </div>
            <p>안녕하세요! 2년 차 웹 퍼블리셔 박원지입니다.</p>
            <p>
              HTML, CSS, JavaScript, Figma등 다양한 툴을 활용하여 웹사이트의
              레이아웃과 디자인을 구성하고, 웹 표준과 웹 접근성을 준수하여 모든
              사용자들이 웹사이트를 손쉽게 이용할 수 있도록 합니다.
            </p>
            <p>
              저는 디자인과 개발뿐만 아니라 기획과 마케팅에도 관심이 많아,
              서비스 운영에 대해 적극적인 자세로 임하고 있습니다.
            </p>
            <p>새로운 것을 배우는 것 또한 늘 환영합니다!</p>
            <p>
              맡은 일에 애정을 가지고 책임감 있게 업무를 수행합니다. 주어진
              역할에서 가치를 창출하며, 제 역량을 충분히 발휘하고자 합니다.
            </p>
            <a href="">자기소개 더보기</a>
          </div>
        </div>
        <div className="desc-box">
          <div className="work">
            <h3>WORK EXPERIENCE</h3>
            <ul>
              <li>2023.07 - 2025.01 이쓰리티에스 UI개발팀 주임</li>
              <li>
                2023.06 - 2023.07 그린아트컴퓨터학원 퍼블리싱 및 웹디자인 멘토
              </li>
            </ul>
          </div>
          <div className="edu">
            <h3>EDUCATION</h3>
            <ul>
              <li>
                2022.08 ~ 2023.02 기업요구를 반영한 디지털비즈니스
                웹앱(UX)디자인 & 개발자 양성과정 수료 - 그린아트컴퓨터학원
              </li>
              <li>2016.03 - 2022.02 대구가톨릭대학교 작곡실용음악 학과 졸업</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutMe;
