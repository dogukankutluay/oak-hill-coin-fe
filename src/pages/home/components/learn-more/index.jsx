import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Wing } from 'assets/icons/learn-more';
import style from './more.module.scss';
import Lottie from 'lottie-react';
import { cards } from './data';
import { default as cn } from 'classnames';
import Sphere from 'assets/animations/learn-more/Sphere';

export default function LearnMore({ reference, tab }) {
  const [index, setIndex] = useState(0);
  const animate = tab === 'learn-more';
  return (
    <div className={style.more} id="learn-more">
      <Wing
        className={cn(
          style.more_wing,
          animate && 'animate__animated animate__fadeInDown'
        )}
      />
      <div className={style.more_wrapper} ref={reference}>
        <div className={style.more_head}>
          <h1
            className={
              animate && 'animate__animated animate__fadeInDown delay-100'
            }
          >
            Our Platform
          </h1>
          <h2
            className={
              animate && 'animate__animated animate__fadeInDown delay-150'
            }
          >
            How it works?
          </h2>
          <p
            className={
              animate && 'animate__animated animate__fadeInDown delay-200'
            }
          >
            Oakhill Launchpad is the world's first blockchain-based investment
            platform. We have some steps to make amazing things happen!
          </p>
        </div>
        <div className={style.more_body}>
          {/* First card */}

          <article
            className={cn(
              style.more_card,
              animate && 'animate__animated animate__fadeInLeft delay-150'
            )}
          >
            <div className={style.lottie_container}>
              <Lottie
                {...animationOptions}
                animationData={cards[index].animationData}
              />
              <span>{cards[index]?.index}</span>
            </div>
            <h1>{cards[index].title}</h1>
            <p>{cards[index].description}</p>
          </article>
          {/* Sphere card */}
          <article
            className={cn(
              style.more_card,
              animate && 'animate__animated animate__fadeIn delay-150'
            )}
          >
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
              animate && 'animate__animated animate__fadeInRight delay-150'
            )}
          >
            <div className={style.lottie_container}>
              <span>{cards[index + 1]?.index}</span>
              <Lottie
                {...animationOptions}
                animationData={cards[index + 1].animationData}
              />
            </div>
            <h1>{cards[index + 1].title}</h1>
            <p>{cards[index + 1]?.description}</p>
          </article>
        </div>
        <div
          className={cn(
            style.more_arrows,
            animate && 'animate__animated animate__slideInUp delay-250'
          )}
        >
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
