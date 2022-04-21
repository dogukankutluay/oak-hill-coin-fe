import { MountainSvg } from 'assets/icons/hero';
import { LeaveSvg, Tree } from 'assets/icons/home';
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

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home_intro}>
        <Tree className={style.home_leftTree} />
        <Tree className={style.home_rightTree} />
        <Header />
        <div className={style.body}>
          <MountainSvg className={style.mountain} />
          <Hero />
          <About />
        </div>
        <div className={style.details}>
          <LearnMore />
          <Details />
          <LeaveSvg className={style.details_leftLeave} />
          <LeaveSvg className={style.details_rightLeave} />
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
