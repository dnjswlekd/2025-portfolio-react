import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/Buttons/Button';

import '@/components/Home/styles/HomeAbout.scss';
import myProfileImg from '@/assets/images/myProfile.jpg';

function HomeAboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

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
            <Link to="/about">
              <Button label="View More" />
            </Link>
          </div>
          <div className="text-box">
            <section className="personal">
              <p>
                <span>이름 :</span> 박원지
              </p>
              <p>
                <span>나이 :</span> 27세
              </p>
              <p>
                <span>학력 :</span> 대구가톨릭대학교 작곡실용음악 학과 졸업
              </p>
            </section>

            <section className="certifications">
              <p>
                <span>수료 내역:</span>
              </p>
              <ul>
                <li>2022.08 ~ 2023.02 그린아트 컴퓨터 학원</li>
                <li>
                  기업요구를 반영한 디지털비즈니스 웹앱(UX)디자인 & 개발자
                  양성과정 수료
                </li>
              </ul>
            </section>

            <section className="experience">
              <p>
                <span>경력사항 :</span>
              </p>
              <ul>
                <li>· 2020.02 - 2021.06 국회사무처 인턴</li>
                <li>
                  · 2023.05 ~ 2023.07 기업요구를 반영한 디지털비즈니스
                  웹앱(UX)디자인 <br />{' '}
                  <p className="indent"> & 개발자 양성과정 멘토링 활동</p>
                </li>
                <li>· 2023.07 ~ 2025.01 이쓰리티에스 UI/UX 퍼블리셔</li>
              </ul>
            </section>

            <section className="licenses">
              <p>
                <span>자격증 :</span>
              </p>
              <ul>
                <li>· GTQ 그래픽기술자격: 포토샵 1급 취득</li>
                <li>· GTQi 그래픽기술자격: 일러스트 1급 취득</li>
                <li>· GTQid 그래픽기술자격: 인디자인 1급 취득</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className="text-loop">
        <ul>
          <li>wonji portfolio process</li>
          <li>wonji portfolio process</li>
          <li>wonji portfolio process</li>
          <li>wonji portfolio process</li>
          <li>wonji portfolio process</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeAboutMe;
