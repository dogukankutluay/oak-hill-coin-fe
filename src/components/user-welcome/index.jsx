import React, { useEffect, useState } from 'react';

// const salesTime = {
//   day: 20,
//   hour: 21,
//   minutes: 0,
//   second: 0,
// };
export default function UserWelcome() {
  // const [remaining, setRemaining] = useState({day:0,hour:0,minutes:0,second:0});

  return (
    <div className="headuserwelcome">
      <div className="headuserwelcome-wrp">
        <div className="headuserwelcome-usertext">
          <h6>Welcome Back!</h6>
          <h1 className="textgradient01 textoverflowellipsis">Stefan Harary</h1>
        </div>
        <div className="headuserwelcome-countdown">
          <h6 className="rainbowstaticbgcolor">Sales END IN (UTC +0)</h6>
          <ul
            className="headcountdown countdowntimestamp"
            data-eventdate={1653071599}
          >
            <li>
              <div>
                <span className="countdown-time jscountdowndays">00</span>
                <span className="countdown-text">Day</span>
              </div>
            </li>
            <li>
              <div>
                <span className="countdown-time jscountdownhours">00</span>
                <span className="countdown-text">Hour</span>
              </div>
            </li>
            <li>
              <div>
                <span className="countdown-time jscountdownminutes">00</span>
                <span className="countdown-text">Min</span>
              </div>
            </li>
            <li>
              <div>
                <span className="countdown-time jscountdownseconds">00</span>
                <span className="countdown-text">Sec</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
