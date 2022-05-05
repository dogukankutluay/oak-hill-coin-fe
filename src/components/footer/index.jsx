import React from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.scss';
import { default as cn } from 'classnames';
import { useSelector } from 'react-redux';
import languages from 'constants/language';
export default function Footer() {
  const lang = useSelector((state) => languages[state.preferences.lang]).footer;

  return (
    <ul
      className={cn(
        style.footer,
        'animate__animated animate__fadeIn delay-600'
      )}
    >
      <li className={style.footerItem}>
        <Link to={'/'}>{lang.terms}</Link>
      </li>
      <li className={style.footerItem}>
        <Link to={'/'}>{lang.privacy}</Link>
      </li>
    </ul>
  );
}
