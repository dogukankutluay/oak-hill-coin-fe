import React from 'react';
import style from './subscribe.module.scss';
import { CoinLogo } from 'assets/icons/coin-info';
import SubscribeForm from 'components/subscribe-form';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Subscribe({ reference }) {
  return (
    <div className={style.subscribe} id="reminder" ref={reference}>
      <div className={style.subscribe_wrapper}>
        <div className={style.subscribe_description}>
          <CoinLogo />
          <p>
            Keem up to date with our progress. Subscribe for e-mail updates.
          </p>
        </div>
        <SubscribeForm />
      </div>
      <div className={style.subscribe_bg}></div>
    </div>
  );
}
