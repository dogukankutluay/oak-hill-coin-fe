import React from 'react';
import style from './container.module.scss';
import containerImage from 'assets/images/container.png';
import { default as cn } from 'classnames';

export default function Container({ children }) {
  return (
    <div
      className={cn(
        style.container,
        'animate__animated animate__fadein delay-100'
      )}
      style={containerStyle}
    >
      {children}
    </div>
  );
}
export const Row = ({ children, className }) => {
  return <section className={cn(style.row, className)}>{children}</section>;
};

const containerStyle = {
  background: `url(${containerImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};
