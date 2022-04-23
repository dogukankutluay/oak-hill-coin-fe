import React from 'react';
import style from './details.module.scss';
import { default as cn } from 'classnames';
import { LeftLeave, RightLeave } from 'assets/icons/details';
export default function Details({ reference, tab }) {
  const animate = tab === 'learn-more';
  return (
    <div className={style.detail} ref={reference}>
      <div className={style.detail_container}>
        <article
          className={cn(
            style.detail_card,
            animate && 'animate__animated animate__fadeInLeft'
          )}
        >
          <h1>Central Guaranteed </h1>
          <h2>Luxembourg Central Bank</h2>
          <p>
            Oak Hill Launchpad is the world's first blockchain-based investment
            platform presenting by Oak Hill Investments which is guaranteed by
            Luxembourg Central Bank.
          </p>
        </article>
        <article
          className={cn(
            style.detail_card,
            animate && 'animate__animated animate__fadeInRight delay-100'
          )}
        >
          <h1>Experience Advisors </h1>
          <h2>Expert of Finance & Funding</h2>
          <p>
            With their experience in finance and investment, Oak Hill
            Investments team is showing their liability about project ideas with
            confidence and knowledge.
          </p>
        </article>
      </div>
      <img
        className={cn(
          style.detail_img,
          animate && 'animate__animated animate__fadeInUp delay-200'
        )}
        alt="oak_hill_invest"
        src={require('../../../../assets/images/oak_hill_invest.png')}
      />
      <LeftLeave
        className={cn(
          style.detail_leftLeave,
          animate && 'animate__animated animate__slideInLeft delay-250'
        )}
      />

      <RightLeave
        className={cn(
          style.detail_rightLeave,
          animate && 'animate__animated animate__slideInRight delay-250'
        )}
      />
    </div>
  );
}
