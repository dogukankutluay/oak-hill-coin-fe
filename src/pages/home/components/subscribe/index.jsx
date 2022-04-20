import React from 'react';
import style from './subscribe.module.scss';
import { CoinLogo } from 'assets/icons/coin-info';
export default function Subscribe() {
  return (
    <div className={style.subscribe}>
      <div className={style.subscribe_wrapper}>
        <div className={style.subscribe_description}>
          <CoinLogo />
          <p>
            Keem up to date with our progress. Subscribe for e-mail updates.
          </p>
        </div>
        <div className={style.subscribe_form}>
          <input type="text" placeholder="Your E-mail Address" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
