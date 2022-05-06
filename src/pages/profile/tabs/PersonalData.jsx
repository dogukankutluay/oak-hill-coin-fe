import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function PersonalData() {
  const user = useSelector((state) => state.user.userInfo);
  const [userInfo, setUserInfo] = useState(user);
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <div id="personal-data" className=" fade show active">
      <form
        className="siteform form-validate personaldataformarea"
        action
        autoComplete="off"
        onsubmit
        noValidate
      >
        <div className="row">
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <div className="input-wrap">
                <label htmlFor="full-name" className="input-item-label">
                  Full Name
                </label>
                <input
                  id="full-name"
                  className="input-bordered required"
                  type="text"
                  name="name"
                  value={userInfo?.name}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <div className="input-wrap">
                <label htmlFor="email-address" className="input-item-label">
                  Email Address
                </label>
                <input
                  id="email-address"
                  className="input-bordered required"
                  type="text"
                  name="email"
                  value={userInfo?.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <div className="input-wrap">
                <label htmlFor="mobile-number" className="input-item-label">
                  Mobile Number
                </label>
                <input
                  id="mobile-number"
                  className="input-bordered required"
                  type="text"
                  name="phone"
                  value={userInfo?.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <div className="input-wrap">
                <label htmlFor="date-of-birth" className="input-item-label">
                  Referral Code
                </label>
                <input
                  id="date-of-birth"
                  className="input-bordered required"
                  type="text"
                  name="date-of-birth"
                  defaultValue="FKXyiztEZ-H"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <div className="input-wrap">
                <label htmlFor="date-of-birth" className="input-item-label">
                  Date of Birth
                </label>
                <input
                  id="date-of-birth"
                  className="input-bordered required date-picker-dob"
                  type="text"
                  name="date-of-birth"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <div className="input-wrap">
                <label htmlFor="nationality" className="input-item-label">
                  Nationality
                </label>
                <select
                  id="nationality"
                  className="select-bordered required select-block"
                  name="nationality"
                >
                  <option value="us">United State</option>
                  <option value="uk">United KingDom</option>
                  <option value="fr">France</option>
                  <option value="ch">China</option>
                  <option value="cr">Czech Republic</option>
                  <option value="cb">Colombia</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="gaps-1x" />
        <div className="d-sm-flex justify-content-between align-items-center">
          <button className="btn btn-primary">Update Profile</button>
          <div className="gaps-2x d-sm-none" />
          <span className="text-success">
            <em className="ti ti-check-box" /> All Changes are saved
          </span>
        </div>
      </form>
    </div>
  );
}
