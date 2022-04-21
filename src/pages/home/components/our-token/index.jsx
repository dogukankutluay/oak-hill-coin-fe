import { LeaveSvg } from 'assets/icons/home';
import React from 'react';
import style from './token.module.scss';

export default function OurToken() {
  return (
    <div className={style.token}>
      <LeaveSvg className={style.token_leftLeave} />
      <LeaveSvg className={style.token_rightLeave} />
      <div className={style.token_wrapper}>
        <h1 className={style.title}>Our Token</h1>
        <h2 className={style.subtitle}>What is Oak Hill Coin?</h2>
        <p>
          Oak Hill Coin is the world's first blockchain-based investment
          platform’s cryptocurrency.
        </p>

        <section className={style.token_infos}>
          <h1>
            100M <span>Tokens</span>{' '}
          </h1>
          <h1>
            100M <span>Shares</span>{' '}
          </h1>
          <h1>
            100M <span>NFTs</span>{' '}
          </h1>
        </section>
        <p className={style.token_description}>
          The simplest way to make a real investment It is Real Digital Asset
        </p>
      </div>
    </div>
  );
}
