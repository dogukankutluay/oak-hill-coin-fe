import React from 'react';
import { default as cn } from 'classnames';
import style from './background.module.scss';
import BackgroundSvg from 'assets/icons/Background.svg';
export default function Background({ children, className }) {
  return (
    <div
      className={cn(style.background, className)}
      style={{
        background: `url(${BackgroundSvg}), linear-gradient(63.43deg, #367d4d 0%, #00b0b9 50%, #82d89a 100%)`,
        backgroundSize: 'cover',
      }}
    >
      {children}
    </div>
  );
}
