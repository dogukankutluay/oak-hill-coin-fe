import style from './text.module.scss';
import { default as cn } from 'classnames';
export const Title = ({ children }) => {
  return (
    <h1
      className={cn(
        style.textTitle,
        'animate__animated animate__fadeIn delay-200'
      )}
    >
      {children}
    </h1>
  );
};
export const Subtitle = ({ children }) => {
  return (
    <h2
      className={cn(
        style.textSubtitle,
        'animate__animated animate__fadeIn delay-200'
      )}
    >
      {children}
    </h2>
  );
};

export const Description = ({ children }) => {
  return (
    <span
      className={cn(
        style.textDescription,
        'animate__animated animate__fadeIn delay-300'
      )}
    >
      {children}
    </span>
  );
};
