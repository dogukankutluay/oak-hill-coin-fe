import React from 'react';
import style from './form.module.scss';
export default function SubscribeForm() {
  return (
    <div className={style.subscribe_form}>
      <input type="text" placeholder="Your E-mail Address" />
      <button>Submit</button>
    </div>
  );
}
