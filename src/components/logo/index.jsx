import React from 'react';
import { OakHillIcon } from 'assets/icons';
import { default as cn } from 'classnames';
import style from './logo.module.scss';
export default function Logo() {
  return (
    <>
      <div
        className={cn(style.logo, 'animate__animated animate__fadeIn')}
      ></div>
      <div
        className={cn(style.logoContainer, 'animate__animated animate__fadeIn')}
      >
        <OakHillIcon />
      </div>
    </>
  );
}
