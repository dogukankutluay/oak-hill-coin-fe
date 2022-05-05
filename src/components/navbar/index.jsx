import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.scss';
import { default as cn } from 'classnames';
import { FlagEn, FlagTr } from 'assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from 'redux/actions/preferencesAction';
import languages from 'constants/language';
export default function Navbar() {
  const activeLang = useSelector((state) => state.preferences.lang);
  const [language, setLanguage] = useState(activeLang);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((state) => languages[state.preferences.lang]).nav;
  const handleLang = (code) => {
    setLanguage(code);
    dispatch(changeLanguage(code));
    setActive(false);
  };
  return (
    <nav
      className={cn(
        style.navbar,
        'animate__animated animate__fadeIn delay-100'
      )}
    >
      <ul className={style.navbarLinks}>
        <li className={style.navbarLink}>
          <Link to={'/'}>{lang.home}</Link>
        </li>
        <li className={style.navbarLink}>
          <Link to={'/'}>{lang.about}</Link>
        </li>
        <li className={style.navbarLink}>
          <Link to={'/'}>{lang.contact}</Link>
        </li>
        <li>
          <div className={style.dropdown}>
            <div
              className={style.dropdownToggle}
              onClick={() => setActive(!active)}
            >
              {langs.find((l) => l.code === language).flag}
            </div>
            {active && (
              <ul className={style.dropdownItems}>
                {langs.map((l, index) => (
                  <li
                    className={style.dropdownItem}
                    key={index}
                    onClick={() => handleLang(l.code)}
                  >
                    {l.flag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

const langs = [
  {
    code: 'tr',
    flag: <FlagTr />,
  },
  {
    code: 'en',
    flag: <FlagEn />,
  },
];
