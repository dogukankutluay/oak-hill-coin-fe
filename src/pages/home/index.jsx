import React from 'react';
import About from './components/about';
import CoinInfo from './components/coin-info';
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
      <Header />
      <Hero />
      <About />
      <LearnMore />
      <Details />
      <OurToken />
      <CoinInfo />
      <Subscribe />
      <Tokenomic />
      <Team />
    </div>
  );
}
