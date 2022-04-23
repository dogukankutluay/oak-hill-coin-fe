import React from 'react';
import style from './tokenomic.module.scss';
import TokenomicChart from './../chart';
import Roadmap from '../roadmap';
import { default as cn } from 'classnames';
export default function Tokenomic({ reference, tab }) {
  const animate = tab === 'tokenomic';
  return (
    <div className={style.tokenomic} id="tokenomic" ref={reference}>
      <div className={style.wrapper}>
        <h2
          className={cn(
            style.subtitle,
            animate && 'animate__animated animate__fadeIn delay-100'
          )}
        >
          Token Details
        </h2>
        <h1
          className={cn(
            style.title,
            animate && 'animate__animated animate__fadeIn delay-200'
          )}
        >
          TOKENOMICS
        </h1>
        <div className={style.container}>
          <div
            className={cn(
              style.chartSide,
              animate && 'animate__animated animate__fadeIn delay-300'
            )}
          >
            <TokenomicChart />
            <h1>
              1 OAKC token price: <b>$0.10</b>
            </h1>
          </div>
          <div
            className={cn(
              style.chartInfo,
              animate && 'animate__animated animate__fadeIn delay-500'
            )}
          >
            <p>
              <b>Max supply:</b> 100.000.000 OAKC
            </p>
            <p>
              <b>Private Sale:</b> 10.000.000 (%10)
            </p>
            <p>
              <b>Pre-Sale:</b> 20.000.000 (%20)
            </p>
            <p>
              <b>Public Sale:</b> 30.000.000 (%30)
            </p>
            <p>
              <b>Team & Founders:</b> 15.000.000 (%15)
            </p>
            <p>
              <b>Advisors:</b> 5.000.000 (%5)
            </p>
            <p>
              <b>IT Development:</b> 3,000,000 (%3)
            </p>
            <p>
              <b>Partnerships:</b> 12.000.000 (%12)
            </p>
            <p>
              <b>Platform Development:</b> 5.000.000 (%5)
            </p>
          </div>
        </div>
      </div>
      <Roadmap />
    </div>
  );
}
