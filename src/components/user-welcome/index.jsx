import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const salesTime = {
  year: 2022,
  month: 6,
  day: 6,
  hour: 16,
  minute: 0,
  second: 0,
};
export default function UserWelcome() {
  const [remaining, setRemaining] = useState(calculateRemaining());

  const user = useSelector((state) => state.user)?.userInfo?.name;

  useEffect(() => {
    setInterval(() => {
      setRemaining(calculateRemaining());
    }, 1000);
  }, []);
  return (
    <div className="headuserwelcome">
      <div className="headuserwelcome-wrp">
        <div className="headuserwelcome-usertext">
          <h6>Welcome Back!</h6>
          <h1 className="textgradient01 textoverflowellipsis">{user}</h1>
        </div>
        <div className="headuserwelcome-countdown">
          <h6 className="rainbowstaticbgcolor">Sales END IN (UTC +0)</h6>
          <ul
            className="headcountdown countdowntimestamp"
            data-eventdate={1653071599}
          >
            <li>
              <div>
                <span className="countdown-time jscountdowndays">
                  {remaining.day}
                </span>
                <span className="countdown-text">Day</span>
              </div>
            </li>
            <li>
              <div>
                <span className="countdown-time jscountdownhours">
                  {remaining.hour}
                </span>
                <span className="countdown-text">Hour</span>
              </div>
            </li>
            <li>
              <div>
                <span className="countdown-time jscountdownminutes">
                  {remaining.minute}
                </span>
                <span className="countdown-text">Min</span>
              </div>
            </li>
            <li>
              <div>
                <span className="countdown-time jscountdownseconds">
                  {remaining.second}
                </span>
                <span className="countdown-text">Sec</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const calculateRemaining = () => {
  const date = new Date(
    salesTime.year,
    salesTime.month - 1,
    salesTime.day,
    salesTime.hour,
    salesTime.minute,
    salesTime.second
  );
  const current = new Date();
  const elapsedSeconds = Math.floor(
    (date.getTime() - current.getTime()) / 1000
  );
  const day = Math.floor(elapsedSeconds / (60 * 60 * 24));
  const hour = Math.floor((elapsedSeconds / (60 * 60)) % 24);
  const minute = Math.floor((elapsedSeconds / 60) % 60);
  const second = Math.floor(elapsedSeconds % 60);
  return { day, hour, minute, second };
};
