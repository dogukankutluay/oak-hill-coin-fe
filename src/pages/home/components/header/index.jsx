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
          <a href="#">About Launchpad</a>
        </li>
        <li className={style.header_link}>
          <a href="#">Our Token</a>
        </li>
        <li className={style.header_link}>
          <a href="#">ICO Schedule</a>
        </li>
        <li className={style.header_link}>
          <a href="#">Tokenomics</a>
        </li>
        <li className={style.header_link}>
          <a href="#">Roadmap</a>
        </li>
        <li className={style.header_link}>
          <a href="#">Team</a>
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
