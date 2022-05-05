import React from 'react';
import { Link } from 'react-router-dom';
export default function TopInfo() {
  return (
    <div className="headtopinfoarea">
      <div class="headtopinfoarea-balancelist">
        <span class="card-sub-title text-orange mr-1">Oakin Price</span>
        <span class="card-sub-title text-dark">
          1 USDT = <span>100.000.000 Oakin</span>
        </span>
      </div>
      <div className="headtopinfoarea-buttonlist">
        <ul className="user-menulist">
          <li className="headbtndeposit">
            <Link to="/deposit">
              <em className="ti ti-wallet" />
              <span>Deposit Addresses</span>
            </Link>
          </li>
          <li className="headbtnkyc d-none">
            <Link to="/">
              <em className="ti ti-files" />
              <span>KYC Application</span>
            </Link>
          </li>
          <li className="headbtnprofile">
            <Link to="/profile" title="Profile">
              <em className="ti ti-user" />
              <span>Profile</span>
            </Link>
          </li>
          <li className="headbtnlogout">
            <Link to="/login" title="Logout">
              <em className="ti ti-power-off" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
