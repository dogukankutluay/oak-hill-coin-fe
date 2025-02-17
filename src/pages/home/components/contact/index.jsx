import { OakhillMainIcon } from 'assets/icons';
import SubscribeForm from 'components/subscribe-form';
import React from 'react';
import style from './contact.module.scss';
import * as SocialMedia from 'assets/icons/contact';
import { default as cn } from 'classnames';
import WorldPng from 'assets/images/contact_world.png';
export default function Contact({ reference, tab }) {
  const animate = tab === 'contact';
  return (
    <div className={style.contact} ref={reference}>
      <div className={style.contact_wrapper}>
        <div
          className={cn(
            style.imageSide,
            animate && 'animate__animated animate__zoomIn'
          )}
          style={{
            background: `url(${WorldPng})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className={cn(
              style.imageCenter,
              animate && 'animate__animated animate__zoomIn delay-100'
            )}
          >
            <OakhillMainIcon />
            <h1>Oak Hill Launchpad</h1>
          </div>
        </div>
        <div className={style.contentSide}>
          <h1
            className={animate && 'animate__animated animate__fadeIn delay-200'}
          >
            Connect with us
          </h1>
          <p
            className={animate && 'animate__animated animate__fadeIn delay-300'}
          >
            FIRST BLOCKCHAIN BASED FUNDING LAUNCHPAD
          </p>
          <div className={style.icons}>
            <a
              href="#"
              target="_blank"
              className={
                animate && 'animate__animated animate__slideInRight delay-350'
              }
            >
              <SocialMedia.FacebookIcon />
            </a>
            <a
              href="#"
              target="_blank"
              className={
                animate && 'animate__animated animate__slideInRight delay-400'
              }
            >
              <SocialMedia.TwitterIcon />
            </a>
            <a
              href="#"
              target="_blank"
              className={
                animate && 'animate__animated animate__slideInRight delay-450'
              }
            >
              <SocialMedia.InstagramIcon />
            </a>
            <a
              href="#"
              target="_blank"
              className={
                animate && 'animate__animated animate__slideInRight delay-500'
              }
            >
              <SocialMedia.LinkedinIcon />
            </a>
            <a
              href="#"
              target="_blank"
              className={
                animate && 'animate__animated animate__slideInRight delay-550'
              }
            >
              <SocialMedia.YoutubeIcon />
            </a>
            <a
              href="#"
              target="_blank"
              className={
                animate && 'animate__animated animate__slideInRight delay-600'
              }
            >
              <SocialMedia.MediumIcon />
            </a>
            <a
              href="#"
              target="_blank"
              className={
                animate && 'animate__animated animate__slideInRight delay-650'
              }
            >
              {' '}
              <SocialMedia.TelegramIcon />
            </a>
          </div>
          <SubscribeForm
            className={cn(
              style.subscribe_form,
              animate && 'animate__animated animate__slideInRight delay-400'
            )}
          />
        </div>
      </div>
    </div>
  );
}
