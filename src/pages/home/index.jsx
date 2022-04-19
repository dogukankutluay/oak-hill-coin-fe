import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import style from './home.module.scss';
// import home_bg from 'assets/images/home_bg.png';
export default function Home() {
  return (
    <div className={style.home} style={homeStyle}>
      <Header />
      <Hero />
    </div>
  );
}

const homeStyle = {
  // background: `url(${home_bg}),linear-gradient(180deg, #9fd192 -33.05%, #3d6878 86.77%)`,
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  // objectFit: 'cover',
  // height: '100vh', //temporary
};
