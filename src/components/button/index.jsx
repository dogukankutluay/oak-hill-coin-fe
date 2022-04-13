import React from 'react';
import style from './button.module.scss';
import { default as cn } from 'classnames';
export default function Button(props) {
  const { variant = 'primary' } = props;
  return (
    <button {...props} className={cn(props.className, style[variant])}>
      {props.children}
    </button>
  );
}
