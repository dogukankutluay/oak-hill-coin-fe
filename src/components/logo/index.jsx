import React from 'react';
import { OakHillIcon } from 'assets/icons';

import style from './logo.module.scss';
export default function Logo() {
  return (
    <div className={style.logo}>
      <OakHillIcon />
    </div>
  );
}
