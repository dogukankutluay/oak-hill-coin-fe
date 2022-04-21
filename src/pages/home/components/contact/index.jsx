import { OakhillMainIcon } from 'assets/icons';
import SubscribeForm from 'components/subscribe-form';
import React from 'react';
import style from './contact.module.scss';
import * as SocialMedia from 'assets/icons/contact';
export default function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.contact_wrapper}>
        <div className={style.imageSide}>
          <img
            src={require('assets/images/contact_world.png')}
            alt="contact_us"
          />
          <div className={style.imageCenter}>
            <OakhillMainIcon />
            <h1>Oak Hill Launchpad</h1>
          </div>
        </div>
        <div className={style.contentSide}>
          <h1>Connect with us</h1>
          <p>FIRST BLOCKCHAIN BASED FUNDING LAUNCHPAD</p>
          <div className={style.icons}>
            <SocialMedia.FacebookIcon />
            <a href="#" target="_blank">
              <SocialMedia.TwitterIcon />
            </a>
            <a href="#" target="_blank">
              <SocialMedia.InstagramIcon />
            </a>
            <a href="#" target="_blank">
              <SocialMedia.LinkedinIcon />
            </a>
            <a href="#" target="_blank">
              <SocialMedia.YoutubeIcon />
            </a>
            <a href="#" target="_blank">
              <SocialMedia.MediumIcon />
            </a>
            <a href="#" target="_blank">
              {' '}
              <SocialMedia.TelegramIcon />
            </a>
          </div>
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
}
