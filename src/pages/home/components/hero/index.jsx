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
  TreePiece,
  WhiteCloudSvg,
} from 'assets/icons/hero';
import { OakhillMainIcon } from 'assets/icons';
import { default as cn } from 'classnames';
import { MountainSvg } from 'assets/icons/hero';

export default function Hero() {
  return (
    <section className={style.hero}>
      <HeroBg
        className={cn(style.hero_bg, 'animate__animated animate__fadeInDown')}
      />
      <MountainSvg
        className={cn(
          style.mountain,
          'animate__animated animate__fadeInUp delay-100'
        )}
      />
      <TreePiece
        className={cn(
          style.tree_piece,
          'animate__animated animate__slideInUp delay-600'
        )}
      />
      <div className={style.hero_container}>
        <div className={style.hero_left}>
          <OakhillMainIcon className={style.hero_lottie_bg} />
          <span className={style.hero_lottie_text}>Oak Hill Launchpad</span>
          <WhiteCloudSvg className={style.hero_lottie_cloud} />
          <Lottie {...worldLottie} className={style.hero_lottie} />
        </div>
        <div className={style.hero_right}>
          <div className={style.hero_svgs}>
            <WhiteCloudSvg className={style.white_cloud} />
            <SunSvg className={style.sun} />
            <div className={style.soft_cap}>
              <SoftCapSvg />
              <h1 className="animate__animated animate__fadeIn  delay-350">
                SOFT CAP
              </h1>
              <p className="animate__animated animate__fadeIn delay-350">
                $5.000.000
              </p>
            </div>
            <div className={style.hard_cap}>
              <h1 className="animate__animated animate__fadeIn delay-350">
                HARD CAP
              </h1>
              <p className="animate__animated animate__fadeIn delay-350">
                $21.000.000
              </p>
              <HardCapSvg className="animate__animated animate__fadeInRightBig delay-250" />
            </div>
          </div>
          <div className={style.hero_body}>
            <h1 className="animate__animated animate__backInRight delay-300">
              Your <span>project!</span> <br /> Your <span>crypto!</span>
            </h1>
            <p className="animate__animated animate__slideInRight delay-300">
              FIRST BLOCKCHAIN BASED FUNDING LAUNCHPAD
            </p>

            <div className={style.hero_buttons}>
              <Link
                to={'/login'}
                className="animate__animated animate__slideInRight delay-500"
              >
                Buy OAKC right now!
              </Link>
              <a
                href="#learn-more"
                className="animate__animated animate__slideInRight delay-500"
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
