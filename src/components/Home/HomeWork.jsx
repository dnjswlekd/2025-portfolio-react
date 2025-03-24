import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/Buttons/Button';

import '@/components/Home/styles/HomeWork.scss';

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
      {' '}
      <h1>HomeWork</h1>
      <h1>HomeWork</h1>
      <Link to="/work">
        <Button label="View More" />
      </Link>
    </div>
  );
}

export default HomeWork;
