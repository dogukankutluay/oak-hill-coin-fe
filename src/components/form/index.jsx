import style from './form.module.scss';
import { default as cn } from 'classnames';
export default function Form({ children }) {
  return <form className={style.form}>{children}</form>;
}
export const Input = (props) => {
  return (
    <div
      className={cn(
        style.formItem,
        'animate__animated animate__fadeIn delay-300'
      )}
    >
      <label htmlFor="" className={style.formLabel}>
        {props.title}
      </label>
      <input className={style.formInput} type="text" {...props} />
    </div>
  );
};

export const Checkbox = (props) => {
  return (
    <div
      className={cn(
        style.checkboxWrapper,
        'animate__animated animate__fadeIn delay-400'
      )}
    >
      <input type="checkbox" className={style.checkbox} />
      <label htmlFor="" className={style.checkboxLabel}>
        {props.title}
      </label>
    </div>
  );
};
