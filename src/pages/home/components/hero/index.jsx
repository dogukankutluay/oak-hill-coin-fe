import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import WorldAnimation from 'assets/animations/hero/WorldLottie';
import style from './hero.module.scss';
import {
  HardCapSvg,
  HeroBg,
  SoftCapSvg,
  SunSvg,
  WhiteCloudSvg,
} from 'assets/icons/hero';
import { OakhillMainIcon } from 'assets/icons';
import { default as cn } from 'classnames';

export default function Hero() {
  return (
    <section className={style.hero}>
      <HeroBg
        className={cn(style.hero_bg, 'animate__animated animate__fadeInDown')}
      />
      <div className={style.hero_container}>
        <div className={style.hero_left}>
          <OakhillMainIcon
            className={cn(
              style.hero_lottie_bg,
              'animate__animated animate__zoomIn'
            )}
          />
          <Lottie
            {...worldLottie}
            className={cn(
              style.hero_lottie,
              'animate__animated animate__fadeInLef'
            )}
          />
        </div>
        <div className={style.hero_right}>
          <div className={style.hero_svgs}>
            <WhiteCloudSvg
              className={cn(
                style.white_cloud,
                'animate__animated animate__slideInLeft'
              )}
            />
            <SunSvg
              className={cn(
                style.sun,
                'animate__animated animate__fadeInDownBig'
              )}
            />
            <div className={style.soft_cap}>
              <SoftCapSvg className="animate__animated animate__fadeInRightBig" />
              <h1 className="animate__animated animate__fadeIn">SOFT CAP</h1>
              <p className="animate__animated animate__fadeIn">$5.000.000</p>
            </div>
            <div className={style.hard_cap}>
              <h1 className="animate__animated animate__fadeIn">HARD CAP</h1>
              <p className="animate__animated animate__fadeIn">$21.000.000</p>
              <HardCapSvg className="animate__animated animate__fadeInRightBig" />
            </div>
          </div>
          <div className={style.hero_body}>
            <h1 className="animate__animated animate__backInRight">
              Your <span>project!</span> <br /> Your <span>crypto!</span>
            </h1>

            <p className="animate__animated animate__slideInRight">
              FIRST BLOCKCHAIN BASED FUNDING LAUNCHPAD
            </p>
            <div className={style.hero_buttons}>
              <Link
                to={'/login'}
                className="animate__animated animate__slideInRight"
              >
                Buy OAKC right now!
              </Link>
              <a
                href="#learn-more"
                className="animate__animated animate__slideInRight"
              >
                Learn more
              </a>
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
