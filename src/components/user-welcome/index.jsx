import { getActiveSchedule } from 'constants/coin';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const salesStart = {
  year: 2022,
  month: 5,
  day: 10,
  hour: 0,
  minute: 0,
  second: 0,
};
const salesEnd = {
  year: 2022,
  month: 6,
  day: 11,
  hour: 0,
  minute: 0,
  second: 0,
};
export default function UserWelcome() {
  const user = useSelector((state) => state.user)?.userInfo?.name;
  const [countdown, setCountdown] = useState(false);
  const currentSale = getActiveSchedule();
  const [remaining, setRemaining] = useState(
    calculateRemaining(currentSale.endDate)
  );
  useEffect(() => {
    const remainingInterval = () => {
      setRemaining(calculateRemaining(currentSale.endDate));
    };
    const current = new Date().getTime();

    if (
      currentSale.startDate.getTime() < current &&
      currentSale.endDate > current
    ) {
      setCountdown(true);
      setInterval(remainingInterval, 1000);
    }
    return clearInterval(remainingInterval);
  }, []);
  return (
    <div className="headuserwelcome">
      <div className="headuserwelcome-wrp">
        <div className="headuserwelcome-usertext">
          <h6>Welcome Back!</h6>
          <h1 className="textgradient01 textoverflowellipsis">{user}</h1>
        </div>
        {countdown && (
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
        )}
      </div>
    </div>
  );
}

const calculateRemaining = (endTime) => {
  const current = new Date();

  const elapsedSeconds = Math.floor(
    (endTime.getTime() - current.getTime()) / 1000
  );
  const day = Math.floor(elapsedSeconds / (60 * 60 * 24));
  const hour = Math.floor((elapsedSeconds / (60 * 60)) % 24);
  const minute = Math.floor((elapsedSeconds / 60) % 60);
  const second = Math.floor(elapsedSeconds % 60);

  return { day, hour, minute, second };
};
