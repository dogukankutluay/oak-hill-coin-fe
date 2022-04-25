import { OakhillMainIcon } from 'assets/icons';
import React, { useEffect, useState } from 'react';
import style from './header.module.scss';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from 'assets/icons/header';
import { default as cn } from 'classnames';
export default function Header({ scroll }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <header
      className={style.header}
      style={
        scroll >= 100
          ? {
              height: '90px',
              transition: '1s',
              background:
                'radial-gradient(101.2% 100% at 50% 0%, #397173 0%, #75A487 100%)',
            }
          : null
      }
    >
      {width <= 915 && (
        <HamburgerMenu
          className={style.header_hamburger}
          onClick={() => setActive(!active)}
        />
      )}
      <ul className={cn(style.header_items, active && style.dropdown)}>
        <li className={style.header_link}>
          <a href="#">
            <OakhillMainIcon />
            Oak Hill Launchpad
          </a>
        </li>
        <li className={style.header_link}>
          <a href="#about">About Launchpad</a>
        </li>
        <li className={style.header_link}>
          <a href="#our-token">Our Token</a>
        </li>
        <li className={style.header_link}>
          <a href="#ico-schedule">ICO Schedule</a>
        </li>
        <li className={style.header_link}>
          <a href="#tokenomic">Tokenomics</a>
        </li>
        <li className={style.header_link}>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li className={style.header_link}>
          <a href="#team">Team</a>
        </li>
        <li className={style.buttons}>
          <Link to={'/login'} className={style.loginBtn}>
            Login
          </Link>
          <Link to={'/register'} className={style.signupBtn}>
            Signup
          </Link>
        </li>
      </ul>
      {active && (
        <div
          className={cn(
            style.dropdown,
            'animate__animated animate__fadeInLeft'
          )}
          onClick={() => setActive(false)}
        >
          <ul className={style.dropdown_menu}>
            <li className={style.dropdown_item}>
              <a href="#about">About Launchpad</a>
            </li>
            <li className={style.dropdown_item}>
              <a href="#our-token">Our Token</a>
            </li>
            <li className={style.dropdown_item}>
              <a href="#ico-schedule">ICO Schedule</a>
            </li>
            <li className={style.dropdown_item}>
              <a href="#tokenomic">Tokenomics</a>
            </li>
            <li className={style.dropdown_item}>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className={style.dropdown_item}>
              <a href="#team">Team</a>
            </li>
            <li className={style.dropdown_item}>
              <Link to={'/login'}>Login</Link>
            </li>
            <li className={style.dropdown_item}>
              <Link to={'/register'}>Register</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
