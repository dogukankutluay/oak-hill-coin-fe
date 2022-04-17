import style from './text.module.scss';
import { default as cn } from 'classnames';
export const Title = (props) => {
  return (
    <h1
      className={cn(
        style.textTitle,
        'animate__animated animate__fadeIn delay-200'
      )}
      style={props.align && { textAlign: `${props.align}` }}
    >
      {props.children}
    </h1>
  );
};
export const Subtitle = (props) => {
  return (
    <h2
      className={cn(
        style.textSubtitle,
        'animate__animated animate__fadeIn delay-200'
      )}
      style={props.align && { textAlign: `${props.align}` }}
    >
      {props.children}
    </h2>
  );
};

export const Description = (props) => {
  return (
    <span
      className={cn(
        style.textDescription,
        'animate__animated animate__fadeIn delay-300'
      )}
      style={props.align && { textAlign: `${props.align}` }}
    >
      {props.children}
    </span>
  );
};
