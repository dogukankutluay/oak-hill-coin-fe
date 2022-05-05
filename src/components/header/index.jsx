import Sidebar from 'components/sidebar';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="header">
      <div className="topbar is-sticky">
        <div className="topbar-navigation">
          <ul className="topbar-nav d-lg-none">
            <li className="topbar-nav-item relative">
              <Link className="toggle-nav" to="/">
                <div className="toggle-icon">
                  <span className="toggle-line" />
                  <span className="toggle-line" />
                  <span className="toggle-line" />
                  <span className="toggle-line" />
                </div>
              </Link>
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
                  1000.00000000 <span>Oakin</span>
                </span>
              </div>
            </div>
            <div className="token-balance token-balance-s2">
              <h6 className="card-sub-title">Your Contribution</h6>
              <ul className="token-balance-list">
                <li className="token-balance-sub">
                  <span className="lead"> 900.00000000</span>
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
