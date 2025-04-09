import React, { useRef } from 'react';
import SectionWork from '@/components/Work/SectionWork';

const sectionDataList = [
  {
    sectionClass: 'section01',
    imgSrc: 'src/assets/images/그룹웨어.png',
    title: 'Portfolio',
    span: 'Responsive Web',
    eng: 'This is my portfolio built with React, including animations and smooth scrolling features.',
    kor: 'React를 기반으로 제작된 포트폴리오이며, 반응형과 스크롤 애니메이션을 포함합니다.',
    skills: ['React ↗', 'SCSS Module ↗', 'Responsive ↗'],
  },
  {
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/그룹웨어.png',
    title: 'The Dopda',
    span: 'Platform',
    eng: 'In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.',
    kor: 'Box구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 Clone Coding으로 퍼블리싱 실력을 키웠습니다.',
    skills: ['HTML CSS MarkUp ↗', 'JavaScript JQuery ↗', 'PC Web ↗'],
  },
  {
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/그룹웨어.png',
    title: 'The Dopda',
    span: 'Platform',
    eng: 'In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.',
    kor: 'Box구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 Clone Coding으로 퍼블리싱 실력을 키웠습니다.',
    skills: ['HTML CSS MarkUp ↗', 'JavaScript JQuery ↗', 'PC Web ↗'],
  },
  {
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/그룹웨어.png',
    title: 'The Dopda',
    span: 'Platform',
    eng: 'In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.',
    kor: 'Box구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 Clone Coding으로 퍼블리싱 실력을 키웠습니다.',
    skills: ['HTML CSS MarkUp ↗', 'JavaScript JQuery ↗', 'PC Web ↗'],
  },
  {
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/그룹웨어.png',
    title: 'The Dopda',
    span: 'Platform',
    eng: 'In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.',
    kor: 'Box구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 Clone Coding으로 퍼블리싱 실력을 키웠습니다.',
    skills: ['HTML CSS MarkUp ↗', 'JavaScript JQuery ↗', 'PC Web ↗'],
  },
  {
    sectionClass: 'section02',
    imgSrc: 'src/assets/images/그룹웨어.png',
    title: 'The Dopda',
    span: 'Platform',
    eng: 'In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.',
    kor: 'Box구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 Clone Coding으로 퍼블리싱 실력을 키웠습니다.',
    skills: ['HTML CSS MarkUp ↗', 'JavaScript JQuery ↗', 'PC Web ↗'],
  },
];

function Work() {
  // 섹션별 ref 배열 생성
  const sectionRefs = useRef(sectionDataList.map(() => React.createRef()));

  return (
    <div className="home">
      {sectionDataList.map((data, index) => (
        <SectionWork
          key={index}
          data={data}
          sectionRef={sectionRefs.current[index]}
        />
      ))}
    </div>
  );
}

export default Work;
