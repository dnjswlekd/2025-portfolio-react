import React, { useRef, useEffect, useState } from 'react';
import Button from '@/components/Buttons/Button';
import '@/components/Home/styles/HomeMain.scss';

import interpark from '@/assets/images/homeWork-interpark.png';
import insightMain from '@/assets/images/homeWork-insight-main.png';
import insightDetail from '@/assets/images/homeWork-insight-detail.png';
import insightCategory from '@/assets/images/homeWork-insight-category.png';
import B2Cdark from '@/assets/images/homeWork-b2c-dark.png';
import B2Clight from '@/assets/images/homeWork-b2c-light.png';
import B2B from '@/assets/images/work-b2b.png';
import designSystem from '@/assets/images/work-design-system.png';
import ott from '@/assets/images/work-ott.png';

const images = [
  interpark,
  insightMain,
  insightDetail,
  insightCategory,
  B2Cdark,
  B2Clight,
  B2B,
  designSystem,
  ott,
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
              <p>안녕하세요! 웹 퍼블리셔 박원지 입니다. 👋</p>
              <p>
                Vue 기반 그룹웨어 프로젝트의 기획부터 운영까지 전 과정을
                경험하며, 실무 중심의 퍼블리싱 역량을 키웠습니다. React
                포트폴리오 제작과 다양한 협업 경험을 통해 유연한 기술 이해도와
                커뮤니케이션 능력을 갖추고 있습니다.
              </p>
              <p>
                사용자 중심의 사고와 책임감을 바탕으로, 더 나은 결과물을 만들기
                위해 항상 고민하고 성장해 나가고 있습니다. 😊
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
