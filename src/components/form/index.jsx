import style from './form.module.scss';
export default function Form({ children }) {
  return <form className={style.form}>{children}</form>;
}
export const Input = (props) => {
  return (
    <div className={style.formItem}>
      <label htmlFor="" className={style.formLabel}>
        {props.title}
      </label>
      <input className={style.formInput} type="text" {...props} />
    </div>
  );
};

export const Checkbox = (props) => {
  return (
    <div className={style.checkboxWrapper}>
      <input type="checkbox" className={style.checkbox} />
      <label htmlFor="" className={style.checkboxLabel}>
        {props.title}
      </label>
    </div>
  );
};
