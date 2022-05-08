import DashboardFooter from 'components/dashboard-footer';
import Header from 'components/header';
import TopInfo from 'components/top-info';
import UserWelcome from 'components/user-welcome';
import { coinSchedule, getActiveSchedule } from 'constants/coin';
import React from 'react';
import { Link } from 'react-router-dom';

export default function IcoDistrubution() {
  const currentSale = getActiveSchedule();
  return (
    <div className="krace">
      {/* KRACE Body Area Start */}
      <div className="kracebody">
        <div className="container">
          {/* Topbar Start */}
          <Header />
          {/* Topbar End */}
          {/* Main Start */}
          <main className="main fullheightmain">
            <TopInfo />
            <UserWelcome />
            {/* Layout Main Layout Start */}
            <div className="kracemainlayoutcont">
              {/* ICO Distribution Area */}
              <div className="icodistributionarea">
                {/* HeadTitle */}
                <div className="layoutheadtitle">
                  <h2 className="page-title">ICO Distribution</h2>
                </div>
                {/* HeadTitle */}
                {/* Ico Distribution */}
                <div className="content-area card">
                  <div className="card-innr form-step-fields">
                    <div className="card-head">
                      <h4 className="card-title card-title-sm">
                        ICO Distribution, Rate &amp; Sales Info
                      </h4>
                    </div>
                    <div className="card-text">
                      <p>
                        To become a part of OAKC project, you can found all
                        details of ICO. <br className="d-none d-sm-block" /> You
                        can contribute and <Link to="/buy-token">buy OAKC</Link>
                        .
                      </p>
                      {/* <p>
                        You can get a quick response and chat with our team in
                        Telegram:{' '}
                        <a href="https://t.me/kracegame" target="_blank">
                          https://t.me/kracegame
                        </a>
                      </p> */}
                    </div>
                    <div className="gaps-3x" />
                    <div className="card-head">
                      <h5 className="card-title card-title-sm">ICO Schedule</h5>
                    </div>
                    <div className="schedule-item">
                      <div className="pdb-1x">
                        <div className="mb-3">
                          <h6 className="text-orange d-block text-uppercase mb-1">
                            Option 1 -{' '}
                            <span className="font-bold">
                              ${currentSale.coinPrice}
                            </span>
                          </h6>
                          <ul>
                            <li>1 OAKC ={currentSale.coinPrice} USDT</li>
                            <li>
                              Tokens will be locked for 12 month then 100% of
                              them will be released at the end of period.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {coinSchedule.map((schedule, index) => {
                      return (
                        <div className="schedule-item" key={index}>
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="pdb-1x">
                                <h6 className="schedule-title">
                                  <span>{schedule.title}</span>
                                  {calculateStatus(schedule, currentSale)}
                                </h6>
                              </div>
                            </div>
                            <div className="col-xl-7">
                              <div className="pdb-1x">
                                <span className>
                                  Private ICO Price: ${schedule.coinPrice}
                                </span>
                                <span>{schedule.start}</span>
                                <span>{schedule.end}</span>
                                <span>
                                  Token Distribute: {schedule.tokenDistribute}
                                </span>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="pdb-1x">
                                <span className="text-nowrap">
                                  Min purchase - $100
                                </span>
                                <span className="text-nowrap">
                                  Token Distribute - 45.000.000
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Ico Distribution */}
              </div>
              {/* ICO Distribution Area */}
            </div>
            {/* Layout Main Layout Start */}
            {/* Footer Start */}
            <DashboardFooter />
            {/* Footer End */}
          </main>
          {/* Main End */}
        </div>
      </div>
      {/* KRACE Body Area End */}
      {/* JavaScript Start */}
      {/* JavaScript End */}
    </div>
  );
}

const calculateStatus = (schedule, currentSale) => {
  if (schedule.startDate.getTime() === currentSale.startDate.getTime())
    return <span className="badge badge-success ucap badge-xs">Running</span>;
  if (schedule.startDate.getTime() < currentSale.startDate.getTime())
    return <span className="badge badge-disabled ucap badge-xs">End</span>;
  if (schedule.startDate.getTime() > currentSale.startDate.getTime())
    return <span className="badge badge-disabled ucap badge-xs">Upcoming</span>;
};
