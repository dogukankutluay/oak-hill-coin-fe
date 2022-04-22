import React from 'react';
import style from './about.module.scss';
import Lottie from 'lottie-react';
import LottieBlockchain from 'assets/animations/about/LottieBlockchain';
import LottieGlobal from 'assets/animations/about/LottieGlobal';
import LottieCommunity from 'assets/animations/about/LottieCommunity';
export default function About() {
  return (
    <div className={style.about} id="about">
      <div className={style.about_wrapper}>
        <article className={style.card}>
          <Lottie {...blockChaninOptions} />
          <h2>Blockchain Based</h2>
          <h1>Funding Launchpad</h1>
        </article>
        <article className={style.card}>
          <Lottie {...globalOptions} />
          <h2>Project Funding Launchpad</h2>
          <h1>Seed to Global</h1>
        </article>
        <article className={style.card}>
          <Lottie {...communityOptions} />
          <h2>Biggest Funding Community</h2>
          <h1>17 000+ VC & Invesment Funds</h1>
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
