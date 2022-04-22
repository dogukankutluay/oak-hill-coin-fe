import React from 'react';
import { CoinLogo, CoinInfoBg } from 'assets/icons/coin-info';
import Lottie from 'lottie-react';
import ReadAnimation from 'assets/animations/coin-info/ReadLottie';
import DownloadAnimation from 'assets/animations/coin-info/DownloadLottie';
import style from './info.module.scss';
import { default as cn } from 'classnames';
export default function CoinInfo() {
  return (
    <div className={style.info}>
      <div className={style.info_wrapper}>
        <section
          className={cn(
            style.section,
            'animate__animated animate__fadeInLeft delay-100'
          )}
        >
          <img
            src={require('../../../../assets/images/lite_paper.png')}
            alt="lite_paper"
          />
          <h2>Check our</h2>
          <h1>Lite paper</h1>
          <div className={style.buttons}>
            <button className="animate__animated animate__slideInLeft delay-300">
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
          className={cn(style.section, 'animate__animated animate__fadeInDown')}
        >
          <CoinLogo />
          <h2>1 OAKC token price</h2>
          <h1>0.10 USD</h1>
        </section>
        <section
          className={cn(
            style.section,
            'animate__animated animate__fadeInRight delay-200'
          )}
        >
          <img
            src={require('../../../../assets/images/private_sale.png')}
            alt="special_price"
          />
          <h2>Private Sale Special Price</h2>
          <h1>10.000.000 OAKC</h1>
          <button className="animate__animated animate__slideInRight delay-400">
            Buy OAKC right now!
          </button>
        </section>
      </div>
      <CoinInfoBg className={style.bg} />
      {/* Countdown section */}
      <div className={style.countdown_wrapper} id="ico-schedule">
        <div className={style.countdown_container}>
          <div className={style.card_side}>
            <div className={style.card}>
              <h1 className={style.card_title}>Private Sale</h1>
              <div className={style.card_body}>
                <span>01</span>
                <div>
                  <h2>1 OAKC = $0.10 </h2>
                  <h3>10.000.000 </h3>
                </div>
              </div>
              <h2 className={style.card_footer}>April 20 - May 20 2022</h2>
            </div>
            <h1 className={style.card_countdown}>
              Monday, 18 of April of 2022
            </h1>
          </div>
          <article className={style.content}>
            <h1>Pre Sale</h1>
            <div className={style.content_body}>
              <span>02</span>
              <div>
                <h2>1 OAKC = $0.25 </h2>
                <p>20.000.000 </p>
              </div>
            </div>
            <h3>May 20 - June 20 2022</h3>
          </article>
          <article className={style.content}>
            <h1>Public-Sale</h1>
            <div className={style.content_body}>
              <span>03</span>
              <div>
                <h2>1 OAKC = $0.50 </h2>
                <p>20.000.000 </p>
              </div>
            </div>
            <h3>May 20 - June 20 2022</h3>
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
