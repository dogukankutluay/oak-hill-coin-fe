import React from 'react';
import style from './roadmap.module.scss';
import RoadmapLottie from 'assets/animations/roadmap/Roadmap.json';
import Lottie from 'lottie-react';
import { LeaveSvg } from 'assets/icons/home';
export default function Roadmap({ reference }) {
  return (
    <div className={style.roadmap} id="roadmap" ref={reference}>
      <h2>Token Details</h2>
      <h1>ROADMAP</h1>
      <div className={style.wrapper}>
        <Lottie {...roadmapLottieOptions} />
      </div>
      <LeaveSvg className={style.roadmap_leftLeave} />
      <LeaveSvg className={style.roadmap_rightLeave} />
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
