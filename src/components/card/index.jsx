import style from './card.module.scss';
export const Card = ({ children }) => {
  return <div className={style.card}>{children}</div>;
};
export const CardTitle = ({ children }) => {
  return <h1 className={style.cardTitle}>{children}</h1>;
};
export const CardText = ({ children }) => {
  return <p className={style.cardText}>{children}</p>;
};
