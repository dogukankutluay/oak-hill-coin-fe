import React from 'react';
import style from './details.module.scss';
export default function Details() {
  return (
    <div className={style.detail}>
      <div className={style.detail_container}>
        <article className={style.detail_card}>
          <h1>Central Guaranteed </h1>
          <h2>Luxembourg Central Bank</h2>
          <p>
            Oak Hill Launchpad is the world's first blockchain-based investment
            platform presenting by Oak Hill Investments which is guaranteed by
            Luxembourg Central Bank.
          </p>
        </article>
        <article className={style.detail_card}>
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
        className={style.detail_img}
        src={require('../../../../assets/images/oak_hill_invest.png')}
      />
    </div>
  );
}
