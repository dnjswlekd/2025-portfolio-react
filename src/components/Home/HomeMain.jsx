import React from 'react';
import '@/components/Home/styles/HomeMain.scss';
// import myProfileImg from '@/assets/images/myProfile.jpg';
import interpark from '@/assets/images/homeWork-interpark.png';

function HomeMain({ onScrollToAboutMe }) {
  return (
    <section className="section homeMain">
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
        <div className="down-btn">
          <button onClick={onScrollToAboutMe}>박원지가 궁금하시다면?</button>
        </div>
        <div className="slider">
          <ul className="items">
            <li className="item">
              <img src={interpark} alt="" />
            </li>
            <li className="item">
              <img src={interpark} alt="" />
            </li>
            <li className="item">
              <img src={interpark} alt="" />
            </li>
            <li className="item">
              <img src={interpark} alt="" />
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
