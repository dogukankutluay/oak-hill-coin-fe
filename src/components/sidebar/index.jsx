import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="navbar">
      <div className="navbar-innr">
        <ul className="navbar-menu">
          <li>
            <Link to={'/'}>
              <em className="ikon ikon-dashboard" /> Dashboard
            </Link>
          </li>
          <li>
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
          </li>
          <li className="d-lg-none">
            <Link to="KYC-Application.html">
              <em className="ti ti-files" />
              KYC Application
            </Link>
          </li>
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
