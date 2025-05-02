import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Button from '@/components/Buttons/Button';
import HomeWorkItem from '@/components/Home/Cards/HomeWorkItem';
import HomeProjectItem from '@/components/Home/Cards/HomeProjectItem';
import Modal from '@/components/Home/Cards/Modal';

import workData from '@/data/workData';
import projectData from '@/data/projectData';

import '@/components/Home/styles/HomeWork.scss';

function HomeWork() {
  // Intersection Observer 훅
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: '-200px 0px',
  });

  const { ref: workRef, inView: workInView } = useInView();
  const { ref: projectRef, inView: projectInView } = useInView();

  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열기 핸들러
  const handleItemClick = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <div
      className={`section home-work animate ${inView ? 'animate-visible' : ''}`}
      ref={ref}
    >
      <div className="inner">
        <div className="title-wrap">
          <h1 className="title">
            <span>Work & </span>
            <span>Project</span>
          </h1>
          <div className="badge"></div>
          <Link to="/work">
            <Button label="View More" />
          </Link>
        </div>

        <div className="container">
          {/* Work 섹션 */}
          <article
            className={`work ${workInView ? 'animate-visible' : ''}`}
            ref={workRef}
          >
            <h2>Work</h2>
            <div className="contents">
              {workData.map((work, index) => (
                <HomeWorkItem
                  key={index}
                  {...work} // workData에서 각 work 아이템을 props로 전달
                  onClick={() => handleItemClick(work)} // 클릭 시 모달 열기
                />
              ))}
            </div>
          </article>

          {/* Project 섹션 */}
          <article
            className={`project ${projectInView ? 'animate-visible' : ''}`}
            ref={projectRef}
          >
            <h2>Project</h2>
            <div className="contents">
              {projectData.map((project, index) => (
                <HomeProjectItem
                  key={index}
                  {...project} // projectData에서 각 project 아이템을 props로 전달
                />
              ))}
            </div>
          </article>
        </div>
      </div>

      {/* 모달 */}
      {isModalOpen && selectedWork && (
        <Modal data={selectedWork} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default HomeWork;
