import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.scss';
export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/'}>About OAKC</Link>
        </li>
        <li>
          <Link to={'/'}>Contact</Link>
        </li>
        <li>
          <svg
            width="46"
            height="45"
            viewBox="0 0 46 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.05 18.0938H27.5V0.909375C26.075 0.615625 24.575 0.46875 23 0.46875C21.425 0.46875 19.925 0.615625 18.5 0.909375V18.0938H0.95C0.65 19.4891 0.5 20.9578 0.5 22.5C0.5 24.0422 0.65 25.5109 0.95 26.9062H18.5V44.0906C19.925 44.3844 21.425 44.5312 23 44.5312C24.575 44.5312 26.075 44.3844 27.5 44.0906V26.9062H45.05C45.35 25.5109 45.5 24.0422 45.5 22.5C45.5 20.9578 45.35 19.4891 45.05 18.0938Z"
              fill="#ED4C5C"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
}
