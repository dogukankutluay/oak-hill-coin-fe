import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from 'redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { coinPrice } from 'constants/coin';

export default function TopInfo() {
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logout());
  };
  return (
    <div className="headtopinfoarea">
      <div class="headtopinfoarea-balancelist">
        <span class="card-sub-title text-orange mr-1">Oakin Price</span>
        <span class="card-sub-title text-dark">
          1 USDT = <span>{1 / coinPrice} Oakin</span>
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
            <Link to="/" title="Logout" onClick={exit}>
              <em className="ti ti-power-off" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
