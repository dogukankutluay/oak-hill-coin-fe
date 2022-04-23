import { LeaveSvg, LeftTree, RightTree } from 'assets/icons/home';
import React, { useEffect, useRef, useState } from 'react';
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
  const [tab, setTab] = useState('hero');
  const heroRef = useRef();
  const aboutRef = useRef();
  const learnMoreRef = useRef();
  const detailsRef = useRef();
  const ourTokenRef = useRef();
  const coinInfoRef = useRef();
  const subscribeRef = useRef();
  const tokenomicRef = useRef();
  const teamRef = useRef();
  const buyRef = useRef();
  const contactRef = useRef();
  console.log(tab);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const offsetHero = heroRef.current?.offsetTop;
      const offsetAbout = aboutRef.current?.offsetTop;
      const offsetLearnMore = learnMoreRef.current?.offsetTop;
      const details = detailsRef.current?.offsetTop;
      const ourToken = ourTokenRef.current.offsetTop;
      const coinInfo = coinInfoRef.current.offsetTop;
      const subscribe = subscribeRef.current.offsetTop;
      const tokenomic = tokenomicRef.current.offsetTop;
      const team = teamRef.current.offsetTop;
      const buy = buyRef.current.offsetTop;
      const contact = contactRef.current.offsetTop;
      const offset = window.scrollY + 70;
      if (offset >= offsetHero && offset < offsetAbout) {
        setTab('hero');
        return 0;
      }
      if (offset >= offsetAbout && offset < offsetLearnMore) {
        setTab('about');

        return 0;
      }
      if (offset >= offsetLearnMore && offset < details) {
        setTab('about');
        return 0;
      }
      if (offset >= details && offset < ourToken) {
        setTab('learn-more');
      }
      if (offset >= ourToken && offset < coinInfo) {
        setTab('our-token');
      }
      if (offset >= coinInfo && offset < subscribe) {
        setTab('coin-info');
      }
      if (offset >= subscribe && offset < tokenomic) {
        setTab('subscribe');
      }
      if (offset >= tokenomic && offset < team) {
        setTab('tokenomic');
      }
      if (offset >= team && offset < buy) {
        setTab('team');
      }
      if (offset >= buy && offset < contact) {
        setTab('buy');
      }
    });
  }, []);
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
          <Hero reference={heroRef} tab={tab} />
          <About reference={aboutRef} tab={tab} />
        </div>
        <div className={style.details}>
          <LearnMore reference={learnMoreRef} tab={tab} />
          <Details reference={detailsRef} tab={tab} />
          <LeaveSvg
            className={cn(
              style.details_leftLeave,
              'animate__animated animate__slideInLeft'
            )}
          />
          <LeaveSvg
            className={cn(
              style.details_rightLeave,
              'animate__animated animate__slideInRight'
            )}
          />
          <div className={style.details_bg}></div>
        </div>
      </div>
      {/*  */}
      <OurToken reference={ourTokenRef} tab={tab} />
      <CoinInfo reference={coinInfoRef} tab={tab} />
      <Subscribe reference={subscribeRef} tab={tab} />
      <Tokenomic reference={tokenomicRef} tab={tab} />
      <Team reference={teamRef} tab={tab} />
      <Buy reference={buyRef} tab={tab} />
      <Contact reference={contactRef} tab={tab} />
    </div>
  );
}
