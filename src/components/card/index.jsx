import style from './card.module.scss';
import { default as cn } from 'classnames';
export const Card = ({ children }) => {
  return (
    <div
      className={cn(style.card, 'animate__animated animate__fadeIn delay-100')}
    >
      {children}
    </div>
  );
};
export const CardTitle = ({ children }) => {
  return <h1 className={style.cardTitle}>{children}</h1>;
};
export const CardText = ({ children }) => {
  return <p className={style.cardText}>{children}</p>;
};
