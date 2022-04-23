import React from 'react';
import style from './roadmap.module.scss';
import RoadmapLottie from 'assets/animations/roadmap/Roadmap.json';
import Lottie from 'lottie-react';
import { default as cn } from 'classnames';
import { LeftLeave, RightLeave } from 'assets/icons/details';
export default function Roadmap({ reference, tab }) {
  const animate = tab === 'roadmap';
  return (
    <div className={style.roadmap} id="roadmap" ref={reference}>
      <h2 className={animate && 'animate__animated animate__fadeIn delay-100'}>
        Token Details
      </h2>
      <h1 className={animate && 'animate__animated animate__fadeIn delay-100'}>
        ROADMAP
      </h1>
      <div className={style.wrapper}>
        <Lottie {...roadmapLottieOptions} />
      </div>
      <LeftLeave
        className={cn(
          style.roadmap_leftLeave,
          animate && 'animate__animated animate__slideInLeft '
        )}
      />
      <RightLeave
        className={cn(
          style.roadmap_rightLeave,
          animate && 'animate__animated animate__slideInRight '
        )}
      />
    </div>
  );
}
const roadmapLottieOptions = {
  loop: true,
  autoplay: true,
  animationData: RoadmapLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
