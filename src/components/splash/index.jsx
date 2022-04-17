import { OakHillIcon, SplashBg } from 'assets/icons';
import Background from 'components/background';
import Button from 'components/button';
import languages from 'constants/routes/language';
import React from 'react';
import { useSelector } from 'react-redux';
import style from './splash.module.scss';
export default function Splash() {
  const lang = useSelector((state) => languages[state.preferences.lang]).splash;
  document.title = lang.pageTitle;
  return (
    <Background>
      <div className={style.splashContainer}>
        <SplashBg className="animate__animated animate__fadeIn delay-100" />
        <OakHillIcon className="animate__animated animate__fadeIn delay-100" />
        <h1 className="animate__animated animate__fadeIn delay-200">
          {lang.title}
        </h1>
        <h2 className="animate__animated animate__fadeIn delay-300">
          {' '}
          {lang.subtitle}
        </h2>
        <p className="animate__animated animate__fadeIn delay-400">
          {lang.description}
        </p>
        <Button>{lang.btnConfirm}</Button>
      </div>
    </Background>
  );
}
