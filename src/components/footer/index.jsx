import React from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.scss';
import { default as cn } from 'classnames';
export default function Footer() {
  return (
    <ul
      className={cn(
        style.footer,
        'animate__animated animate__fadeIn delay-600'
      )}
    >
      <li className={style.footerItem}>
        <Link to={'/'}>Terms & Conditions</Link>
      </li>
      <li className={style.footerItem}>
        <Link to={'/'}>Privacy Policy</Link>
      </li>
    </ul>
  );
}
