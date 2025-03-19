import React, { useRef, useEffect, useState } from 'react';
import Button from '@/components/Buttons/Button';
import '@/components/Home/styles/HomeMain.scss';

import interpark from '@/assets/images/homeWork-interpark.png';
import naver from '@/assets/images/homeWork-naver.png';
import insightMain from '@/assets/images/homeWork-insight-main.png';
import insightDetail from '@/assets/images/homeWork-insight-detail.png';
import insightCategory from '@/assets/images/homeWork-insight-category.png';
import B2Bdark from '@/assets/images/homeWork-b2c-dark.png';
import B2Blight from '@/assets/images/homeWork-b2c-light.png';

const images = [
  interpark,
  naver,
  insightMain,
  insightDetail,
  insightCategory,
  B2Bdark,
  B2Blight,
];

function HomeMain({ onScrollToAboutMe }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section home-main ${isVisible ? 'animate-visible' : ''}`}
      ref={sectionRef}
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
                작업물들을 소개하는 공간이자, <br />각 프로젝트를 통해 얻은
                배움과 성장을 공유하며, 더 나은 퍼블리셔로서의 여정을
                보여드리고자 합니다. 🙂
              </p>
            </div>
          </div>
        </div>
        <div className="scroll-down-btn">
          <Button onClick={onScrollToAboutMe} label="Scroll Down" />
        </div>
        <div className="slider">
          <ul className="items">
            {[...images, ...images].map((img, idx) => (
              <li className="item" key={idx}>
                <img src={img} alt={`work ${idx + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeMain;
