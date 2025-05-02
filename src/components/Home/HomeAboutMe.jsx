import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/pages/styles/About.scss';
import myProfileImg from '@/assets/images/myProfile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import signature from '@/assets/images/signature.png';
import signatureSub from '@/assets/images/signature-sub.png';

gsap.registerPlugin(ScrollTrigger);

function HomeAboutMe({ theme }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const textBoxRef = useRef(null);

  const signatureSrc = theme === 'dark' ? signatureSub : signature;

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
          </div>
          <div className="text-box" ref={textBoxRef}>
            <div className="signature">
              <img src={signatureSrc} alt="시그니처" />
            </div>
            <p>안녕하세요! 2년 차 웹 퍼블리셔 박원지입니다.</p>
            {/* <p>
              Vue.js 기반 실무 프로젝트를 경험했으며, 이 포트폴리오는 React로
              제작해 다양한 프레임워크에 대한 이해도와 응용 능력을 함께
              보여드리고자 했습니다.
            </p> */}
            <p>
              Vue 기반 그룹웨어 프로젝트를 기획부터 디자인 개발 및 운영,
              유지보수한 경험이 있으며, React를 활용한 포트폴리오 제작을 통해
              다양한 프레임워크에 대한 이해를 넓혔습니다. 실사용자 피드백을
              반영해 사용성과 생산성을 개선하는 데 주력해왔으며, 프로젝트의
              완성도를 높이기 위해 주도적으로 의견을 제시합니다. 더 나은
              서비스를 만들기 위해 지속적으로 학습하고 성장하는 것을 즐기며,
              이를 실무에 적용하기 위해 항상 고민합니다. 현재는 Figma를 통한
              디자인 시스템 구축과 프론트엔드 협업 경험을 바탕으로, 더욱
              체계적인 퍼블리셔로 성장하고자 노력하고 있습니다.
            </p>
            <p>
              새로운 기술이나 방식에도 열린 자세로 배우고, 팀워크 속에서
              긍정적인 영향을 주는 퍼블리셔가 되기 위해 노력하고 있습니다.
            </p>
            <p>
              디자인 시스템 기반의 UI 설계부터 웹 표준을 지킨 퍼블리싱, 원활한
              협업까지 고려하며 팀에 긍정적인 영향을 주는 퍼블리셔를 지향합니다
              :)
            </p>
            <Link to="/about" className="go-about">
              자기소개 더보기
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
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
