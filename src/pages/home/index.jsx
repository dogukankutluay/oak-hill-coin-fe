import { MountainSvg, TreePiece } from 'assets/icons/hero';
import { LeaveSvg, LeftTree, RightTree } from 'assets/icons/home';
import React from 'react';
import About from './components/about';
import Buy from './components/buy';
import CoinInfo from './components/coin-info';
import Contact from './components/contact';
import Details from './components/details';
import Header from './components/header';
import Hero from './components/hero';
import LearnMore from './components/learn-more';
import OurToken from './components/our-token';
import Subscribe from './components/subscribe';
import Team from './components/team';
import Tokenomic from './components/tokenomic';
import style from './home.module.scss';
import { default as cn } from 'classnames';
export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home_intro}>
        <LeftTree
          className={cn(
            style.home_leftTree,
            'animate__animated animate__pulse delay-150'
          )}
        />
        <RightTree
          className={cn(
            style.home_rightTree,
            'animate__animated animate__pulse delay-150'
          )}
        />
        <Header />
        <div className={style.body}>
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
          <Hero />
          <About />
        </div>
        <div className={style.details}>
          <LearnMore />
          <Details />
          <LeaveSvg className={cn(style.details_leftLeave)} />
          <LeaveSvg className={cn(style.details_rightLeave)} />
          <div className={style.details_bg}></div>
        </div>
      </div>
      {/*  */}
      <OurToken />
      <CoinInfo />
      <Subscribe />
      <Tokenomic />
      <Team />
      <Buy />
      <Contact />
    </div>
  );
}
