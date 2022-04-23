import React from 'react';
import style from './buy.module.scss';
import Lottie from 'lottie-react';
import CoinLottie from 'assets/animations/buy/CoinLottie.json';
import BackgroundSvg from 'assets/icons/Background.svg';
export default function Buy({ reference }) {
  return (
    <div div className={style.buy} style={buyStyle} ref={reference}>
      <div className={style.buy_wrapper}>
        <div className={style.coinSide}>
          <Lottie {...coinAnimationOptions} />
          <h1>Oak Hill Coin</h1>
        </div>
        <div className={style.content}>
          <h1>ONLY FOR PRIVATE SALE</h1>
          <h2>
            PRICE: <b>$0.10</b>
          </h2>
          <button>BUY</button>
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
