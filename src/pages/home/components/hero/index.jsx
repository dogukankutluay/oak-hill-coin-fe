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
export default function Hero({ reference, tab }) {
  const animate = tab === 'hero';
  return (
    <section className={style.hero} ref={reference}>
      <HeroBg
        className={cn(
          style.hero_bg,
          animate && 'animate__animated animate__fadeInDown'
        )}
      />
      <MountainSvg
        className={cn(
          style.mountain,
          animate && 'animate__animated animate__fadeInUp delay-100'
        )}
      />
      <TreePiece
        className={cn(
          style.tree_piece,
          animate && 'animate__animated animate__slideInUp delay-600'
        )}
      />
      <div className={style.hero_container}>
        <div className={style.hero_left}>
          <OakhillMainIcon
            className={cn(
              style.hero_lottie_bg,
              animate && 'animate__animated animate__zoomIn delay-450'
            )}
          />
          <span
            className={cn(
              style.hero_lottie_text,
              animate && 'animate__animated animate__slideInUp delay-500'
            )}
          >
            Oak Hill Launchpad
          </span>
          <WhiteCloudSvg
            className={cn(
              style.hero_lottie_cloud,
              animate && 'animate__animated animate__fadeInLeft delay-550'
            )}
          />
          <Lottie
            {...worldLottie}
            className={cn(
              style.hero_lottie,
              animate && 'animate__animated animate__fadeInLeft delay-400'
            )}
          />
        </div>
        <div className={style.hero_right}>
          <div className={style.hero_svgs}>
            <WhiteCloudSvg
              className={cn(
                style.white_cloud,
                animate && 'animate__animated animate__fadeInLeft delay-550'
              )}
            />
            <SunSvg
              className={cn(
                style.sun,
                animate && 'animate__animated animate__fadeInDownBig delay-200'
              )}
            />
            <div className={style.soft_cap}>
              <SoftCapSvg
                className={
                  animate &&
                  'animate__animated animate__fadeInRightBig delay-250'
                }
              />
              <h1
                className={
                  animate && 'animate__animated animate__fadeIn  delay-350'
                }
              >
                SOFT CAP
              </h1>
              <p
                className={
                  animate && 'animate__animated animate__fadeIn delay-350'
                }
              >
                $5.000.000
              </p>
            </div>
            <div className={style.hard_cap}>
              <h1
                className={
                  animate && 'animate__animated animate__fadeIn delay-350'
                }
              >
                HARD CAP
              </h1>
              <p
                className={
                  animate && 'animate__animated animate__fadeIn delay-350'
                }
              >
                $21.000.000
              </p>
              <HardCapSvg
                className={
                  animate &&
                  'animate__animated animate__fadeInRightBig delay-250'
                }
              />
            </div>
          </div>
          <div className={style.hero_body}>
            <h1
              className={
                animate && 'animate__animated animate__backInRight delay-300'
              }
            >
              Your <span>project!</span> <br /> Your <span>crypto!</span>
            </h1>
            <p
              className={
                animate && 'animate__animated animate__slideInRight delay-300'
              }
            >
              FIRST BLOCKCHAIN BASED FUNDING LAUNCHPAD
            </p>

            <div className={style.hero_buttons}>
              <Link
                to={'/login'}
                className={
                  animate && 'animate__animated animate__slideInRight delay-500'
                }
              >
                Buy OAKC right now!
              </Link>
              <a
                href="#learn-more"
                className={
                  animate && 'animate__animated animate__slideInRight delay-500'
                }
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
