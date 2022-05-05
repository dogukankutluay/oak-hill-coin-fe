import React from 'react';
import style from './button.module.scss';
import { default as cn } from 'classnames';
import { Link } from 'react-router-dom';
export default function Button(props) {
  const { variant = 'primary' } = props;
  if (props.to) {
    return (
      <Link
        {...props}
        to={props.to}
        className={cn(
          props.className,
          style[variant],
          'animate__animated animate__fadeIn delay-500'
        )}
      ></Link>
    );
  }
  return (
    <button
      {...props}
      className={cn(
        props.className,
        style[variant],
        'animate__animated animate__fadeIn delay-500'
      )}
    >
      {props.children}
    </button>
  );
}
