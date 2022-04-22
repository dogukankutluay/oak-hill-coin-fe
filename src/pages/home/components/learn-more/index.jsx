import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Wing } from 'assets/icons/learn-more';
import style from './more.module.scss';
import Lottie from 'lottie-react';
import { cards } from './data';
import { default as cn } from 'lottie-react';
import Sphere from 'assets/animations/learn-more/Sphere';
export default function LearnMore() {
  const [index, setIndex] = useState(0);
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
          {/* First card */}
          <article
            className={cn(style.more_card, 'animate__animated animate__fadeIn')}
          >
            <div className={style.lottie_container}>
              <Lottie
                className={style.lottie_container_lottie}
                {...animationOptions}
                animationData={cards[index].animationData}
              />
              <span>{cards[index]?.index}</span>
            </div>
            <h1>{cards[index].title}</h1>
            <p>{cards[index].description}</p>
          </article>
          {/* Sphere card */}
          <article className={style.more_card}>
            <Lottie
              {...animationOptions}
              animationData={Sphere}
              className={style.more_card_sphere}
            />
          </article>
          {/* Second card */}
          <article
            className={cn(
              style.more_card,
              'animate__animated animate__fadeInOut'
            )}
          >
            <div className={style.lottie_container}>
              <Lottie
                className={style.lottie_container_lottie}
                {...animationOptions}
                animationData={cards[index + 1].animationData}
              />
              <span>{cards[index + 1]?.index}</span>
            </div>
            <h1>{cards[index + 1].title}</h1>
            <p>{cards[index + 1]?.description}</p>
          </article>
        </div>
        <div className={style.more_arrows}>
          <ArrowLeft onClick={() => setIndex(index > 0 ? index - 1 : 0)} />
          <ArrowRight
            onClick={() =>
              setIndex(index < cards.length - 2 ? index + 1 : index)
            }
          />
        </div>
      </div>
    </div>
  );
}

const animationOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
