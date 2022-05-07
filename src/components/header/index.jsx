import Sidebar from 'components/sidebar';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleNavbar } from 'redux/actions/preferencesAction';
export default function Header() {
  const user = useSelector((state) => state.user.userInfo);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const changeNavbar = () => {
    setActive(!active);
    dispatch(handleNavbar(!active));
  };

  return (
    <header className="header">
      <div className="topbar is-sticky">
        <div className="topbar-navigation">
          <ul className="topbar-nav d-lg-none" onClick={changeNavbar}>
            <li className="topbar-nav-item relative">
              <div className="toggle-nav" style={{ cursor: 'pointer' }}>
                <div className="toggle-icon">
                  <span className="toggle-line" />
                  <span className="toggle-line" />
                  <span className="toggle-line" />
                  <span className="toggle-line" />
                </div>
              </div>
            </li>
          </ul>
          <Link
            className="topbar-logo textusernotselect rainbowhoverbgcolor"
            to="/"
          >
            <img
              src={require('assets/img/krace/exchange_listing.png')}
              srcSet="assets/img/krace/exchange_listing.png 2x"
              alt="logo"
            />
          </Link>
          <Sidebar />
          <div className="topbar-balance">
            <div className="token-balance">
              <div className="token-balance-text">
                <h6 className="card-sub-title">Tokens Balance</h6>
                <span className="lead">
                  {' '}
                  {user?.tokenBalance}
                  <span style={{ marginLeft: '0.2rem' }}>Oakin</span>
                </span>
              </div>
            </div>
            <div className="token-balance token-balance-s2">
              <h6 className="card-sub-title">Your Contribution</h6>
              <ul className="token-balance-list">
                <li className="token-balance-sub">
                  <span className="lead" style={{ marginRight: '0.2rem' }}>
                    {' '}
                    {user?.usdtBalance}
                  </span>
                  <span>USDT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
