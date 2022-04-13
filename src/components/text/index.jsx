import style from './text.module.scss';
export const Title = ({ children }) => {
  return <h1 className={style.textTitle}>{children}</h1>;
};
export const Subtitle = ({ children }) => {
  return <h2 className={style.textSubtitle}>{children}</h2>;
};

export const Description = ({ children }) => {
  return <span className={style.textDescription}>{children}</span>;
};
