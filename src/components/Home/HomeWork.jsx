import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import WorkItem from '@/components/Cards/WorkItem';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '@/components/Home/styles/HomeWork.scss';

// gsap 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function HomeWork() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <div
      className={`section home-work animate ${inView ? 'animate-visible' : ''}`}
      ref={ref}
    >
      <div className="inner">
        <div>
          <h1 className="title">Work & Project</h1>
          <div className="badge"></div>
        </div>
        <div className="container">
          <article>
            <h2>Work</h2>
            <div className="contents">
              <div className="content">
                <a
                  href="https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4"
                  className="preview"
                  target="_blank"
                >
                  <img src="src/assets/images/그룹웨어.png" alt="" />
                </a>
                <div className="desc">
                  <h3>병원 전용 그룹웨어</h3>
                  <p>
                    <span>2023.07 ~ 2025.01 (1년 6개월)</span>
                  </p>
                  <p>
                    <span>vue.js</span>
                    <span>option API</span>
                    <span>Kendo UI Library</span>
                  </p>
                  <p>
                    <span>UI/UX 디자인</span>
                    <span>퍼블리싱</span>
                    <span>리디자인</span>
                    <span>유지보수</span>
                  </p>
                  <p>
                    <span>대시보드</span>
                    <span>전자보고</span>
                    <span>메일 (리디자인)</span>
                    <span>캘린더/부서캘린더</span>
                    <span>간호사 근무표 캘린더</span>
                    <span>당직표 캘린더</span>
                    <span>공유자원관리</span>
                    <span>커뮤니티</span>
                    <span>관리자 페이지</span>
                  </p>
                </div>
              </div>
              <div className="content">
                <a
                  href="https://www.notion.so/UI-UX-1a2ecdd53fa481a2a33bc677d902dff9?pvs=4"
                  className="preview"
                  target="_blank"
                >
                  <img src="src/assets/images/메신저.png" alt="" />
                </a>
                <div className="desc">
                  <h3>병원 전용 메신저 시스템 (모바일)</h3>
                  <p>
                    <span>2023.07 ~ 2025.01 (1년 6개월)</span>
                  </p>
                  <p>
                    <span>vue.js</span>
                    <span>option API</span>
                    <span>Kendo UI Library</span>
                  </p>
                  <p>
                    <span>UI/UX 디자인</span>
                    <span>퍼블리싱</span>
                    <span>리디자인</span>
                    <span>유지보수</span>
                  </p>
                </div>
              </div>
              <div className="content">
                <a className="preview" target="_blank">
                  <img src="src/assets/images/주차관제.png" alt="" />
                </a>
                <div className="desc">
                  <h3>병원 전용 주차관제 시스템 (모바일)</h3>
                  <p>
                    <span>2023.10 ~ 2024.02 (4개월)</span>
                  </p>
                  <p>
                    <span>vue.js</span>
                    <span>option API</span>
                    <span>Kendo UI Library</span>
                  </p>
                  <p>
                    <span>메인페이지</span>
                    <span>상세페이지</span>
                    <span>퍼블리싱</span>
                    <span>UI/UX 리디자인</span>
                    <span>유지보수</span>
                  </p>
                  <p>
                    <span>입차/출차</span>
                    <span>vip 입차 등록/관리</span>
                    <span>주차이력</span>
                    <span>주차정산</span>
                    <span>주차 만족도 조사</span>
                    <span>주차관제 대시보드</span>
                    <span>환경설정</span>
                    <span>반응형</span>
                  </p>
                </div>
              </div>
              <div className="content">
                <a className="preview" target="_blank">
                  <img src="src/assets/images/대명스페셜라이프.png" alt="" />
                </a>
                <div className="desc">
                  <h3>e-브로슈어 쇼핑몰 메인, 상세페이지</h3>
                  <p>
                    <span>2024.11 (2주)</span>
                  </p>
                  <p>
                    <span>html</span>
                    <span>css</span>
                    <span>JQuery</span>
                  </p>
                  <p>
                    <span>UI/UX 리디자인</span>
                    <span>퍼블리싱</span>
                    <span>유지보수</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article>
            <h2>Project</h2>
            <div className="contents">
              <div className="desc">
                <a className="preview" target="_blank">
                  {/* <img src="src/assets/images/주차관제.png" alt="" /> */}
                </a>
                <h3>강의사이트 UI/UX 디자인 및 퍼블리싱</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>gsap을 활용한 인터랙티브 사이트</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>피그마를 활용한 디자인시스템 구축</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>디자인시스템을 활용한 B2B 사이트</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>디자인시스템을 활용한 B2C 사이트</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>디자인시스템을 활용한 모바일 OTT</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>인터파크 클론코딩</h3>
              </div>
              <div>
                <img src="" alt="" />
                <h3>네이버 클론코딩</h3>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default HomeWork;
