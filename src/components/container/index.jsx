import React, { useEffect, useState } from 'react';
import style from './container.module.scss';
import containerImage from 'assets/images/container.png';
import { default as cn } from 'classnames';

export default function Container({ children }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const containerStyle =
    width < 1000
      ? { backgroundColor: ' rgba(255,255,255,0.9)' }
      : {
          background: `url(${containerImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        };

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
