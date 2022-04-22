import React from 'react';
import { ArrowLeft, ArrowRight, Wing } from 'assets/icons/learn-more';
import style from './more.module.scss';
import Lottie from 'lottie-react';
import ProjectIdeas from 'assets/animations/learn-more/ProjectIdeas';
import ProjectPresenting from 'assets/animations/learn-more/ProjectPresenting';
import Sphere from 'assets/animations/learn-more/Sphere';
export default function LearnMore() {
  return (
    <div className={style.more} id="learn-more">
      <Wing className={style.wing} />
      <div className={style.more_wrapper}>
        <div className={style.more_head}>
          <h1>Our Platform</h1>
          <h2>How it works?</h2>
          <p>
            Oakhill Launchpad is the world's first blockchain-based investment
            platform. We have some steps to make amazing things happen!
          </p>
        </div>
        <div className={style.more_body}>
          <article className={style.more_card}>
            <div className={style.lottie_container}>
              <Lottie {...projectIdeasOptions} />
              <span>01</span>
            </div>
            <h1>Seed Project Idea</h1>
            <p>
              When you have project idea which is in the seed level and
              preparing to grow as big as longest trees, Oak Hill Launchpad is
              ready listen about your project.
            </p>
          </article>
          <article className={style.more_card}>
            <Lottie {...sphereOptions} className={style.more_card_sphere} />
          </article>
          <article className={style.more_card}>
            <div className={style.lottie_container}>
              <Lottie {...projectPresentingOptions} />
              <span>02</span>
            </div>
            <h1>Seed Project Idea</h1>
            <p>
              When you have project idea which is in the seed level and
              preparing to grow as big as longest trees, Oak Hill Launchpad is
              ready listen about your project.
            </p>
          </article>
        </div>
        <div className={style.more_arrows}>
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

const projectIdeasOptions = {
  loop: true,
  autoplay: true,
  animationData: ProjectIdeas,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const projectPresentingOptions = {
  loop: true,
  autoplay: true,
  animationData: ProjectPresenting,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const sphereOptions = {
  loop: true,
  autoplay: true,
  animationData: Sphere,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
