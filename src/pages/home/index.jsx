import { LeftTree, RightTree } from 'assets/icons/home';
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
  const icoScheduleRef = useRef();
  const subscribeRef = useRef();
  const tokenomicRef = useRef();
  const teamRef = useRef();
  const buyRef = useRef();
  const contactRef = useRef();
  const detailsContainerRef = useRef();
  const roadmapRef = useRef();
  // console.log(tab);
  let scrollPrevious = 0;
  useEffect(() => {
    window.addEventListener('scroll', () => {
      //prevent scrolling back
      if (scrollPrevious > window.scrollY) {
        return 0;
      }
      scrollPrevious = window.scrollY;

      const offset = window.scrollY + 550;
      const offsetHero = heroRef.current?.offsetTop;
      const offsetAbout = aboutRef.current?.offsetTop;
      const offsetLearnMore =
        learnMoreRef.current?.offsetTop + detailsContainerRef.current.offsetTop;
      const details =
        detailsRef.current?.offsetTop + detailsContainerRef.current.offsetTop;
      const ourToken = ourTokenRef.current.offsetTop;
      const coinInfo = coinInfoRef.current.offsetTop;
      const icoSchedule = icoScheduleRef.current.offsetTop;
      const subscribe = subscribeRef.current.offsetTop;
      const tokenomic = tokenomicRef.current.offsetTop;
      const roadmapOffset = roadmapRef.current.offsetTop;
      const team = teamRef.current.offsetTop;
      const buy = buyRef.current.offsetTop;
      const contact = contactRef.current.offsetTop;

      if (offset >= offsetHero && offset < offsetAbout) {
        setTab('hero');
      }
      if (offset >= offsetAbout && offset < offsetLearnMore) {
        setTab('about');
      }
      if (offset >= offsetLearnMore && offset < details) {
        setTab('learn-more');
      }
      if (offset >= details && offset < ourToken) {
        setTab('details');
      }
      if (offset >= ourToken && offset < coinInfo) {
        setTab('our-token');
      }
      if (offset >= coinInfo && offset < icoSchedule) {
        setTab('coin-info');
      }
      if (offset >= icoSchedule && offset < subscribe) {
        setTab('schedule');
      }

      if (offset >= tokenomic && offset < roadmapOffset) {
        setTab('tokenomic');
      }
      if (offset >= roadmapOffset && offset < team) {
        setTab('roadmap');
      }
      if (offset >= team && offset < buy) {
        setTab('team');
      }
      if (offset >= buy && offset < contact) {
        setTab('buy');
      }
      if (offset > contact) {
        setTab('contact');
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
        <div className={style.details} ref={detailsContainerRef}>
          <LearnMore reference={learnMoreRef} tab={tab} />
          <Details reference={detailsRef} tab={tab} />
          <div className={style.details_bg}></div>
        </div>
      </div>

      <OurToken reference={ourTokenRef} tab={tab} />
      <CoinInfo reference={{ coinInfoRef, icoScheduleRef }} tab={tab} />
      <Subscribe reference={subscribeRef} tab={tab} />
      <Tokenomic reference={{ tokenomicRef, roadmapRef }} tab={tab} />
      <Team reference={teamRef} tab={tab} />
      <Buy reference={buyRef} tab={tab} />
      <Contact reference={contactRef} tab={tab} />
    </div>
  );
}
