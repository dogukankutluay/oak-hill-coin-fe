import React from 'react';
import style from './form.module.scss';
import { default as cn } from 'classnames';
export default function SubscribeForm({ className }) {
  return (
    <div className={cn(style.subscribe_form, className)}>
      <input type="text" placeholder="Your E-mail Address" />
      <button>Submit</button>
    </div>
  );
}
