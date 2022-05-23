import React from 'react';
import style from './buy.module.scss';
import Lottie from 'lottie-react';
import CoinLottie from 'assets/animations/buy/CoinLottie.json';
import BackgroundSvg from 'assets/icons/Background.svg';
import { default as cn } from 'classnames';
export default function Buy({ reference, tab }) {
  const animate = tab === 'buy';
  return (
    <div div className={style.buy} style={buyStyle} ref={reference}>
      <div className={style.buy_wrapper}>
        <div
          className={cn(
            style.coinSide,
            animate && 'animate__animated animate__fadeIn'
          )}>
          <Lottie {...coinAnimationOptions} />
          <h1>Oak Hill Coin</h1>
        </div>
        <div className={style.content}>
          <h1
            className={
              animate && 'animate__animated animate__fadeIn delay-100'
            }>
            ONLY FOR PRIVATE SALE
          </h1>
          <h2
            className={
              animate && 'animate__animated animate__fadeIn delay-200'
            }>
            PRICE: <b>$0.11</b>
          </h2>
          <button
            className={animate && 'animate__animated animate__pulse delay-300'}>
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}

const coinAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: CoinLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const buyStyle = {
  background: `url(${BackgroundSvg}), linear-gradient(193.33deg, #2e7544 9.58%, #69be8d 90.42%)`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
