import React, { useState } from 'react';

const FORM = {
  oldPassword: '',
  password: '',
};
export default function Password() {
  const [form, setForm] = useState(FORM);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div id="password" className="">
      <form
        className="siteform form-validate passwordformarea"
        action
        autoComplete="off"
        onsubmit
        noValidate
      >
        <div className="row">
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <div className="input-wrap">
                <label htmlFor="old-pass" className="input-item-label">
                  Old Password
                </label>
                <input
                  id="old-pass"
                  className="input-bordered required"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <div className="input-wrap">
                <label htmlFor="new-pass" className="input-item-label">
                  New Password
                </label>
                <input
                  id="new-pass"
                  className="input-bordered required"
                  type="password"
                  name="new-pass"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-item input-with-label">
              <div className="input-wrap">
                <label htmlFor="confirm-pass" className="input-item-label">
                  Confirm New Password
                </label>
                <input
                  id="confirm-pass"
                  className="input-bordered required"
                  type="password"
                  name="confirm-pass"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="note note-plane note-info pdb-1x">
          <em className="fas fa-info-circle" />
          <p>
            Password should be minmum 8 letter and include lower and uppercase
            letter.
          </p>
        </div>
        <div className="gaps-1x" />
        <div className="d-sm-flex justify-content-between align-items-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
          <div className="gaps-2x d-sm-none" />
          <span className="text-success">
            <em className="ti ti-check-box" /> Changed Password
          </span>
        </div>
      </form>
    </div>
  );
}
