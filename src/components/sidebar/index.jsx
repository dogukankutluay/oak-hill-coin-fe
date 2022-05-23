import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleNavbar } from 'redux/actions/preferencesAction';
const links = [
  {
    title: 'Dashboard',
    icon: 'ikon ikon-dashboard',
    route: '/dashboard',
  },
  {
    title: 'Buy Tokens',
    icon: 'ikon ikon-coins',
    route: '/buy-token',
  },
  {
    title: 'Deposit Addresses',
    icon: 'ti ti-wallet',
    route: '/deposit',
  },
  {
    title: 'ICO Distribution',
    icon: 'ikon ikon-distribution',
    route: '/ico-distribution',
  },
  {
    title: 'Wallet',
    icon: 'ikon ikon-docs',
    route: '/wallet',
  },
  {
    title: 'Profile',
    icon: 'ikon ikon-user',
    route: '/profile',
  },
];
export default function Sidebar() {
  const navbarStatus = useSelector((state) => state.preferences.navbar);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const activeTab = window.location.pathname;

  const changeNavbar = () => {
    setTimeout(() => {
      dispatch(handleNavbar(!navbarStatus));
    }, 100);
  };
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      className={`navbar mobile ${width < 1059 && 'navbar-mobile'}  ${
        navbarStatus ? '  active' : ''
      }`}
    >
      <div className="navbar-innr">
        <ul
          className="navbar-menu"
          onClick={changeNavbar}
          style={{ userSelect: 'none' }}
        >
          {links.map((item, index) => {
            const isActiveTab = item.route === activeTab;
            return (
              <li key={index}>
                <Link
                  to={item.route}
                  style={isActiveTab ? { color: 'green' } : {}}
                >
                  <em
                    className={item.icon}
                    style={isActiveTab ? { color: 'green' } : {}}
                  />{' '}
                  {item.title}
                </Link>
              </li>
            );
          })}
          {/* <li>
            <Link to="/buy-token">
              <em className="ikon ikon-coins" /> Buy Tokens
            </Link>
          </li>
          <li>
            <Link to="/deposit">
              <em className="ti ti-wallet" /> Deposit Addresses
            </Link>
          </li>
          <li>
            <Link to="/ico-distribution">
              <em className="ikon ikon-distribution" /> ICO Distribution
            </Link>
          </li>
          <li>
            <Link to="/wallet">
              <em className="ikon ikon-docs" /> Wallet
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <em className="ikon ikon-user" /> Profile
            </Link>
          </li> */}
          {/* <li className="d-lg-none">
            <Link to="KYC-Application.html">
              <em className="ti ti-files" />
              KYC Application
            </Link>
          </li> */}
          <li className="d-lg-none">
            <Link to="/login" className="text-orange">
              <em className="ti ti-power-off text-orange" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
