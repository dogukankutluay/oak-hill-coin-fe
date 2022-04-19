import React from 'react';
import About from './components/about';
import Details from './components/details';
import Header from './components/header';
import Hero from './components/hero';
import LearnMore from './components/learn-more';
import style from './home.module.scss';
export default function Home() {
  return (
    <div className={style.home}>
      <Header />
      <Hero />
      <About />
      <LearnMore />
      <Details />
    </div>
  );
}
