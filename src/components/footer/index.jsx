import React from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.scss';
export default function Footer() {
  return (
    <ul className={style.footer}>
      <li className={style.footerItem}>
        <Link to={'/'}>Terms & Conditions</Link>
      </li>
      <li className={style.footerItem}>
        <Link to={'/'}>Privacy Policy</Link>
      </li>
    </ul>
  );
}
