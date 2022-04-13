import React from 'react';
import { default as cn } from 'classnames';
import style from './background.module.scss';
export default function Background({ children, className }) {
  return <div className={cn(style.background, className)}>{children}</div>;
}
