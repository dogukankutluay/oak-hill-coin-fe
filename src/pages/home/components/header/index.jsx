import { OakhillMainIcon } from 'assets/icons';
import React from 'react';
import style from './header.module.scss';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className={style.header}>
      <ul className={style.header_items}>
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
    </header>
  );
}
