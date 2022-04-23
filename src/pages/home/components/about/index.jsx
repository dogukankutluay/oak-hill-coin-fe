import React from 'react';
import style from './about.module.scss';
import Lottie from 'lottie-react';
import LottieBlockchain from 'assets/animations/about/LottieBlockchain';
import LottieGlobal from 'assets/animations/about/LottieGlobal';
import LottieCommunity from 'assets/animations/about/LottieCommunity';
import { default as cn } from 'classnames';
export default function About({ reference, tab }) {
  const animate = tab === 'about';
  return (
    <div className={style.about} id="about" ref={reference}>
      <div className={style.about_wrapper}>
        <article className={cn(style.card)}>
          <Lottie
            {...blockChaninOptions}
            className={animate && 'animate__animated animate__slideInLeft'}
          />
          <h2
            className={
              animate && 'animate__animated animate__fadeInLeft delay-50'
            }
          >
            Blockchain Based
          </h2>
          <h1
            className={
              animate && 'animate__animated animate__fadeInLeft delay-50'
            }
          >
            Funding Launchpad
          </h1>
        </article>
        <article className={cn(style.card)}>
          <Lottie
            {...globalOptions}
            className={
              animate && 'animate__animated animate__slideInUp delay-100'
            }
          />
          <h2
            className={
              animate && 'animate__animated animate__fadeInUp delay-150'
            }
          >
            Project Funding Launchpad
          </h2>
          <h1
            className={
              animate && 'animate__animated animate__fadeInUp delay-150'
            }
          >
            Seed to Global
          </h1>
        </article>
        <article className={style.card}>
          <Lottie
            {...communityOptions}
            className={
              animate && 'animate__animated animate__slideInRight delay-200'
            }
          />
          <h2
            className={
              animate && 'animate__animated animate__fadeInRight delay-250'
            }
          >
            Biggest Funding Community
          </h2>
          <h1
            className={
              animate && 'animate__animated animate__fadeInRight delay-250'
            }
          >
            17 000+ VC & Invesment Funds
          </h1>
        </article>
      </div>
      <div className={style.about_bg}></div>
    </div>
  );
}

const blockChaninOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieBlockchain,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const globalOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieGlobal,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const communityOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieCommunity,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
