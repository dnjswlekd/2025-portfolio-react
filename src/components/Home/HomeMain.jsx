import React, { useEffect, useRef } from 'react';
import '@/components/Home/styles/HomeMain.scss';
// import myProfileImg from '@/assets/images/myProfile.jpg';
import interpark from '@/assets/images/homeWork-interpark.png';
import naver from '@/assets/images/homeWork-naver.png';
import Button from '@/components/Buttons/Button';

function HomeMain({ onScrollToAboutMe }) {
  const animateRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible'); // 애니메이션 클래스 추가
          }
        });
      },
      {
        threshold: 0.5, // 50% 이상 보일 때 애니메이션 실행
      }
    );

    if (animateRef.current) {
      observer.observe(animateRef.current);
    }

    return () => {
      if (animateRef.current) {
        observer.unobserve(animateRef.current);
      }
    };
  }, []);

  return (
    <section
      className="section home-main animate"
      data-animate="motion"
      ref={animateRef}
    >
      <div className="inner">
        <div className="intro">
          <div className="intro-text">
            <h1>
              web <span>publisher</span>
            </h1>
            <div className="desc">
              <p>
                안녕하세요! 저는 매력적인 사용자 경험을 만드는데 열정을 가진 웹
                퍼블리셔 박원지 입니다. 👋
              </p>
              <p>
                이 포트폴리오는 웹 퍼블리셔로서 쌓아온 경험과 노력이 담긴
                작업물들을 소개하는 공간이자, <br /> 각 프로젝트를 통해 얻은
                배움과 성장을 공유하며, 더 나은 퍼블리셔로서의 여정을
                보여드리고자 합니다. 🙂
              </p>
            </div>
          </div>
          {/* <div className="profile-img">
            <img src={myProfileImg} alt="Profile Image" />
          </div> */}
        </div>
        <div className="scroll-down-btn">
          <Button onClick={onScrollToAboutMe} label="Scroll Down" />
        </div>
        <div className="slider">
          <ul className="items">
            <li className="item">
              <img src={interpark} alt="" />
            </li>
            <li className="item">
              <img src={naver} alt="" />
            </li>
            <li className="item">
              <img src={interpark} alt="" />
            </li>
            <li className="item">
              <img src={naver} alt="" />
            </li>
            <li className="item">
              <img src={interpark} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeMain;
