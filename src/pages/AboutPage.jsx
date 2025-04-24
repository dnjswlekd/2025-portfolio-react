import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Buttons/Button';
import '@/components/Home/styles/HomeAbout.scss';
import myProfileImg from '@/assets/images/myProfile.jpg';

gsap.registerPlugin(ScrollTrigger);

function About() {
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
      className={`section about-page animate ${
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
            <p>
              저는 병원 전용 그룹웨어처럼 복잡한 프로젝트를 처음부터 끝까지
              주도하며, 실사용자의 피드백을 적극 반영해 사용 만족도를 높인
              경험이 있습니다. 실패를 두려워하지 않고, 어떤 도전도 배움의 기회로
              삼아 끝까지 완수하는 책임감을 가지고 일합니다. 퍼블리셔로서 단순한
              구현을 넘어 기능 이상의 가치를 만들고, 팀에 긍정적인 영향을 주는
              사람이 되고자 늘 노력합니다.
            </p>
            <p>
              사용자 중심의 UI 설계와 체계적인 퍼블리싱, 그리고 원활한
              커뮤니케이션을 통해 문제를 해결하는 데 집중합니다. 디자인 시스템
              기반의 피그마 설계부터 웹표준을 준수한 퍼블리싱, 프론트엔드
              개발자와의 유연한 협업까지 고려하며 일합니다. 단순히 ‘디자인을
              구현하는 사람’을 넘어, 사용자의 니즈를 파악하고 기획자,
              클라이언트, 개발자 사이에서 조율하며 더 나은 방향을 함께 고민할 줄
              아는 퍼블리셔가 되고자 합니다.
            </p>
          </div>
        </div>
        <div className="desc-box">
          <div className="work">
            <h3>personal</h3>
            <ul>
              <li>이름: 박원지</li>
              <li>나이: 27세</li>
              <li>학력: 대구가톨릭대학교 작곡실용음악 학과 졸업</li>
            </ul>
          </div>
          <div className="work">
            <h3>certifications</h3>
            <ul>
              <li>2023.07 - 2025.01 이쓰리티에스 UI개발팀 주임</li>
              <li>
                2023.06 - 2023.07 그린아트컴퓨터학원 퍼블리싱 및 웹디자인 멘토
              </li>
            </ul>
          </div>
          <div className="work">
            <h3>work experience</h3>
            <ul>
              <li>2023.07 - 2025.01 이쓰리티에스 UI/UX 퍼블리셔</li>
              <li>
                2023.06 - 2023.07 그린아트컴퓨터학원 퍼블리싱 및 웹디자인 멘토
              </li>
              <li>2020.02 - 2021.06 국회사무처 인턴</li>
            </ul>
          </div>
          <div className="work">
            <h3>licenses</h3>
            <ul>
              <li>GTQ 그래픽기술자격 - 포토샵 1급 취득</li>
              <li>GTQi 그래픽기술자격 - 일러스트 1급 취득</li>
              <li>GTQid 그래픽기술자격 - 인디자인 1급 취득</li>
            </ul>
          </div>
          <div className="work">
            <h3>education</h3>
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

export default About;
