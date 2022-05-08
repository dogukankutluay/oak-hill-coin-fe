import React, { useEffect, useState } from 'react';
import { CoinLogo, CoinInfoBg } from 'assets/icons/coin-info';
import Lottie from 'lottie-react';
import ReadAnimation from 'assets/animations/coin-info/ReadLottie';
import DownloadAnimation from 'assets/animations/coin-info/DownloadLottie';
import style from './info.module.scss';
import { default as cn } from 'classnames';
import { coinSchedule } from 'constants/coin';

export default function CoinInfo({ reference, tab }) {
  const [date, setDate] = useState(getDate());
  const animate = tab === 'coin-info';
  const animateSchedule = tab === 'schedule';

  useEffect(() => {
    const interval = () => {
      setDate(getDate());
    };
    setInterval(interval, 1000);
    clearInterval(interval);
  }, []);
  return (
    <div className={style.info}>
      <div className={style.info_wrapper} ref={reference.coinInfoRef}>
        <section
          className={cn(
            style.section,
            animate && 'animate__animated animate__fadeInLeft delay-100'
          )}
        >
          <img
            src={require('../../../../assets/images/lite_paper.png')}
            alt="lite_paper"
          />
          <h2>Check our</h2>
          <h1>Lite paper</h1>
          <div className={style.buttons}>
            <button
              className={
                animate && 'animate__animated animate__slideInLeft delay-300'
              }
            >
              <Lottie {...readAnimationOptions} className={style.btn_lottie} />
              Read
            </button>
            <button className="animate__animated animate__slideInLeft delay-300">
              <Lottie
                {...downloadAnimationOptions}
                className={style.btn_lottie}
              />
              Download
            </button>
          </div>
        </section>
        <section
          className={cn(
            style.section,
            animate && 'animate__animated animate__fadeInDown'
          )}
        >
          <CoinLogo />
          <h2>1 OAKC token price</h2>
          <h1>{coinSchedule[0].coinPrice} USD</h1>
        </section>
        <section
          className={cn(
            style.section,
            animate && 'animate__animated animate__fadeInRight delay-200'
          )}
        >
          <img
            src={require('../../../../assets/images/private_sale.png')}
            alt="special_price"
          />
          <h2>Private Sale Token Distribute</h2>
          <h1>10.000.000 OAKC</h1>
          <button className="animate__animated animate__slideInRight delay-400">
            Buy OAKC right now!
          </button>
        </section>
      </div>
      <CoinInfoBg className={style.bg} />
      {/* Countdown section */}
      <div
        className={style.countdown_wrapper}
        id="ico-schedule"
        ref={reference.icoScheduleRef}
      >
        <h1
          className={cn(
            style.countdown_title,
            animateSchedule && 'animate__animated animate__fadeInDown '
          )}
        >
          Token Details
        </h1>
        <h2
          className={cn(
            style.countdown_subtitle,
            animateSchedule && 'animate__animated animate__fadeInDown '
          )}
        >
          ICO Schedule
        </h2>
        <div className={style.countdown_container}>
          <div
            className={cn(
              style.card_side,
              animateSchedule &&
                'animate__animated animate__slideInLeft delay-200'
            )}
          >
            <div className={style.card}>
              <h1 className={style.card_title}>Private Sale</h1>
              <div className={style.card_body}>
                <span>01</span>
                <div>
                  <h2>1 OAKC = {coinSchedule[0].coinPrice} </h2>
                  <h3>10.000.000 </h3>
                </div>
              </div>
              <h2 className={style.card_footer}>May 10 - June 10 2022</h2>
            </div>
            <h1 className={style.card_countdown}>{date}</h1>
          </div>
          <article
            className={cn(
              style.content,
              animateSchedule &&
                'animate__animated animate__fadeInLeft delay-150'
            )}
          >
            <h1>Pre Sale</h1>
            <div className={style.content_body}>
              <span>02</span>
              <div>
                <h2>1 OAKC = $0.20 </h2>
                <p>20.000.000 </p>
              </div>
            </div>
            <h3>June 10 - July 10 2022</h3>
          </article>
          <article
            className={cn(
              style.content,
              animateSchedule &&
                'animate__animated animate__fadeInLeft delay-100'
            )}
          >
            <h1>Public-Sale</h1>
            <div className={style.content_body}>
              <span>03</span>
              <div>
                <h2>1 OAKC = $0.25 </h2>
                <p>30.000.000 </p>
              </div>
            </div>
            <h3>July 10 - August 10 2022</h3>
          </article>
        </div>
      </div>
    </div>
  );
}

const readAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: ReadAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const downloadAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: DownloadAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const getDate = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date();
  return `${days[date.getDay()]}, ${date.getDate()} of ${
    months[date.getMonth()]
  } of ${date.getFullYear()}`;
};
