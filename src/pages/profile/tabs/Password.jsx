import { Info } from 'components/text';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { auth } from 'requests';

const FORM = {
  newPassword: '',
  password: '',
  passwordConfirm: '',
};
export default function Password() {
  const [form, setForm] = useState(FORM);
  const email = useSelector((state) => state.user.userInfo.email);
  const [response, setResponse] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    if (form.newPassword !== form.passwordConfirm)
      return setResponse({
        success: false,
        message: 'New passwords did not match!',
      });

    try {
      const { data } = await auth.changePassword({ data: { ...form, email } });
      if (data.success) {
        window.location.reload();
      }
      setResponse(data);
    } catch (error) {
      setResponse(error.response?.data);
      console.log(error.response.data);
    }
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
                  value={form.password}
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
                  name="newPassword"
                  onChange={handleChange}
                  value={form.newPassword}
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
                  name="passwordConfirm"
                  value={form.passwordConfirm}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <Info success={response?.success}>{response?.message}</Info>
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
