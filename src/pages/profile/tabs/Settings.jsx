import React from 'react';

export default function Settings() {
  return (
    <div id="settings">
      <div className="pdb-1-5x">
        <h5 className="card-title card-title-sm text-dark">
          Security Settings
        </h5>
      </div>
      <form action="#">
        <div className="input-item">
          <input
            type="checkbox"
            className="input-switch input-switch-sm"
            id="save-log"
            defaultChecked
          />
          <label htmlFor="save-log">Save my Activities Log</label>
        </div>
        <div className="input-item">
          <input
            type="checkbox"
            className="input-switch input-switch-sm"
            id="pass-change-confirm"
          />
          <label htmlFor="pass-change-confirm">
            Confirm me through email before password change
          </label>
        </div>
        <div className="pdb-1-5x">
          <h5 className="card-title card-title-sm text-dark">
            Manage Notification
          </h5>
        </div>
        <div className="input-item">
          <input
            type="checkbox"
            className="input-switch input-switch-sm"
            id="latest-news"
            defaultChecked
          />
          <label htmlFor="latest-news">
            Notify me by email about sales and latest news
          </label>
        </div>
        <div className="input-item">
          <input
            type="checkbox"
            className="input-switch input-switch-sm"
            id="activity-alert"
            defaultChecked
          />
          <label htmlFor="activity-alert">
            Alert me by email for unusual activity.
          </label>
        </div>
        <div className="gaps-1x" />
        <div className="d-flex justify-content-between align-items-center">
          <span />
          <span className="text-success">
            <em className="ti ti-check-box" /> Setting has been updated
          </span>
        </div>
      </form>
    </div>
  );
}
