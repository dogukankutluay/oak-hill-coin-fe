import React from 'react';
import style from './roadmap.module.scss';
import RoadmapLottie from 'assets/animations/roadmap/Roadmap.json';
import Lottie from 'lottie-react';
export default function Roadmap() {
  return (
    <div className={style.roadmap} id="roadmap">
      <h2>Token Details</h2>
      <h1>ROADMAP</h1>
      <div className={style.wrapper}>
        <Lottie {...roadmapLottieOptions} />
      </div>
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
