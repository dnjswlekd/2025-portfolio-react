import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/components/Home/styles/HomeContact.scss';
import myProfileImg from '@/assets/images/myProfile2.jpg';

gsap.registerPlugin(ScrollTrigger);

function HomeContact() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const textBoxRef = useRef(null);

  useEffect(() => {
    if (inView && textBoxRef.current) {
      const elements = textBoxRef.current.querySelectorAll('p, a');

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
  }, [inView]);

  return (
    <div
      className={`section home-contact animate ${
        inView ? 'animate-visible' : ''
      }`}
      ref={ref}
    >
      <div className="inner">
        <div>
          <h1 className="title">Contact</h1>
          <div className="badge"></div>
        </div>
        <div className="content">
          <div className="text-box" ref={textBoxRef}>
            <div className="container">
              <p>
                "아름답고 화려한 디자인만을 만드는 것이 목표가 아닌,
                <br />
                <strong>최적의 사용자 경험을 제공하는 것을 목표</strong>로 하는
                <br />
                <strong>웹 퍼블리셔, 박원지</strong>가 되겠습니다."
              </p>
              <p>
                연락처 : <span> wj8014@gmail.com,</span>
                <span>010-5237-1274</span>
              </p>

              <div className="link">
                <a
                  href="https://dnjswlekd.notion.site/c2464a78e9e14ed294996934e8b30878?pvs=4"
                  className="notion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Notion 바로가기
                </a>
                <a
                  href="https://github.com/dnjswlekd"
                  className="git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub 바로가기
                </a>
                <a
                  href="pdf/resume_final.pdf"
                  download
                  className="resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  이력서 다운받기
                </a>
              </div>
            </div>
          </div>
          <div className="profile">
            <div className="profile-img">
              <img src={myProfileImg} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
