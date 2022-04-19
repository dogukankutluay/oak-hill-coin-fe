import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import WorldAnimation from 'assets/animations/hero/WorldLottie';
import style from './hero.module.scss';
import {
  HardCapSvg,
  SoftCapSvg,
  SunSvg,
  WhiteCloudSvg,
} from 'assets/icons/hero';
import { OakhillMainIcon } from 'assets/icons';

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.hero_container}>
        <div className={style.hero_left}>
          <OakhillMainIcon className={style.hero_lottie_bg} />
          <Lottie {...worldLottie} className={style.hero_lottie} />
        </div>
        <div className={style.hero_right}>
          <div className={style.hero_svgs}>
            <WhiteCloudSvg className={style.white_cloud} />
            <SunSvg className={style.sun} />

            <SoftCapSvg className={style.soft_cap} />
            <HardCapSvg />
          </div>
          <div className={style.hero_body}>
            <h1>
              Your <span>project!</span> <br /> Your <span>crypto!</span>
            </h1>

            <p>FIRST BLOCKCHAIN BASED FUNDING LAUNCHPAD</p>
            <div className={style.hero_buttons}>
              <Link to={'/login'}>Buy OAKC right now!</Link>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const worldLottie = {
  loop: true,
  autoplay: true,
  animationData: WorldAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
