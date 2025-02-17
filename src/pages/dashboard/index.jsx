import DashboardFooter from 'components/dashboard-footer';
import Header from 'components/header';
import TopInfo from 'components/top-info';
import UserWelcome from 'components/user-welcome';
import { getActiveSchedule } from 'constants/coin';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  document.title = 'Oak Hill';
  const currentSale = getActiveSchedule();
  const user = useSelector((state) => state.user.userInfo);
  return (
    <div className="krace">
      <div className="kracebody">
        <div className="container">
          <Header />
          {/* Topbar End */}
          {/* Main Start */}
          <main className="main fullheightmain">
            <TopInfo />
            <UserWelcome />
            {/* Layout Main Layout Start */}
            <div className="kracemainlayoutcont">
              {/* Homepage Area */}
              <div className="homepagearea">
                {/* Main Video Start */}
                <div className="kracedashboardtoparea">
                  <div className="card card-border-radius-big card-full-height aspectratioarea youtubevideo">
                    <div className="aspectratio230" />
                    <div
                      id="carouselExampleControls"
                      className="carousel slide aspectratioimg"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <CarouselProvider
                          naturalSlideWidth={100}
                          naturalSlideHeight={125}
                          totalSlides={3}
                          infinite="true"
                          interval={'3000'}
                          isPlaying="true"
                        >
                          <Slider>
                            <Slide index={0}>
                              {' '}
                              <img
                                src={require('assets/img/exchange_listing.jpg')}
                                style={{ width: '100%' }}
                              />
                            </Slide>
                            <Slide index={1}>
                              {' '}
                              <img
                                src={require('assets/img/exchange_listing.jpg')}
                                style={{ width: '100%' }}
                              />
                            </Slide>
                            <Slide index={2}>
                              {' '}
                              <img
                                style={{ width: '100%' }}
                                src={require('assets/img/exchange_listing.jpg')}
                              />
                            </Slide>
                          </Slider>
                          <ButtonBack>
                            <span
                              class="carousel-control-prev"
                              role="button"
                              data-slide="prev"
                              style={{ display: 'inline', marginTop: '20%' }}
                            >
                              <span
                                class="carousel-control-prev-icon"
                                aria-hidden="false"
                              ></span>
                              <span class="sr-only">Previous</span>
                            </span>
                          </ButtonBack>
                          <ButtonNext>
                            {' '}
                            <span
                              className="carousel-control-next"
                              role="button"
                              style={{ display: 'inline', marginTop: '20%' }}
                            >
                              <span className="carousel-control-next-icon" />
                              <span className="sr-only">Next</span>
                            </span>
                          </ButtonNext>
                        </CarouselProvider>
                      </div>
                      {/*
                       */}
                    </div>
                  </div>
                </div>
                {/* Main Video End */}
                {/* Main Top Start */}
                <div className="row">
                  {/* Tokens Balance */}
                  <div className="d-xl-none col-sm-6">
                    <div className="token-statistics card card-bg-kracelogo card-box-padding-md card-border-radius-big card-full-height">
                      <div className="card-innr">
                        <div className="card-head">
                          <h5 className="card-title card-title-sm">Wallet</h5>
                        </div>
                        <div className="token-balance mb-2">
                          <div className="token-balance-text">
                            <h6 className="card-sub-title">Tokens Balance</h6>
                            <span className="lead" style={{ color: '#035D20' }}>
                              {user.tokenBalance} <span>OAKC</span>
                            </span>
                          </div>
                        </div>
                        <div className="token-balance token-balance-s2">
                          <h6 className="card-sub-title">Your Contribution</h6>
                          {/* <ul className="token-balance-list">
                            <li className="token-balance-sub"> */}
                          <span className="lead" style={{ color: '#035D20' }}>
                            {user.usdtBalance}
                            <span
                              style={{
                                display: 'inline',
                                marginLeft: '0.125rem',
                              }}
                            >
                              USDT
                            </span>
                          </span>
                          {/* </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tokens Balance */}
                  {/* Pre-Sale Token Sales Progress */}
                  <div className="col-xl-4 col-sm-6">
                    <div className="token-sales card card-bg-kracelogo card-box-padding-md card-border-radius-big card-full-height">
                      <div className="card-innr">
                        <div className="card-head">
                          <h5 className="card-title card-title-sm">
                            {currentSale.title}
                          </h5>
                        </div>
                        <div className="token-rate-wrap row">
                          <div className="token-rate col-md-6 col-lg-12">
                            <span className="card-sub-title">OAKC PRICE</span>
                            <h5 className="font-mid text-dark mt-3 mb-0">
                              1 OAKC
                            </h5>
                            <h3 className="font-mid text-dark">
                              ={' '}
                              <span>
                                ${parseFloat(currentSale.coinPrice).toFixed(2)}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pre-Sale Token Sales Progress */}
                  {/* Token Sales Progress */}
                  <div className="d-none col-xl-6 col-md-12">
                    <div className="token-sales card card-bg-kracelogo card-box-padding-md card-border-radius-big card-full-height">
                      <div className="card-innr">
                        <div className="card-head">
                          <h4 className="card-title card-title-sm">
                            OAKC Sales Progress
                          </h4>
                        </div>
                        <ul className="progress-info">
                          <li>
                            <span>Raised</span> 76.582.141
                          </li>
                          <li className="text-right">
                            <span>TOTAL</span> 207.000.000
                          </li>
                        </ul>
                        <div className="progress-bar">
                          <div
                            className="progress-hcap"
                            data-percent={83}
                            style={{ width: '83%' }}
                          >
                            <div className="text-green">
                              Hard cap <span>$8.100.000</span>
                            </div>
                          </div>
                          <div
                            className="progress-scap"
                            data-percent={24}
                            style={{ width: '24%' }}
                          >
                            <div className="text-green">
                              Soft cap <span>$1.000.000</span>
                            </div>
                          </div>
                          <div
                            className="progress-percent"
                            data-percent={28}
                            style={{ width: '28%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Token Sales Progress */}
                  {/* ICO Schedule */}
                  <div className="col-xl-8 col-md-12">
                    <div className="token-sales card card-bg-kracelogo card-box-padding-md card-border-radius-big card-full-height">
                      <div className="card-innr">
                        <div className="card-head has-aside">
                          <h5 className="card-title card-title-sm">
                            ICO Schedule
                          </h5>
                          <span className="badge badge-success ucap badge-xs">
                            Running
                          </span>
                        </div>
                        <div className="token-rate-wrap">
                          <div className="token-rate">
                            <h5 className="card-sub-title">
                              {currentSale.title}
                            </h5>
                            <div>{currentSale.start}</div>
                            <div>{currentSale.end}</div>
                            <div>Min purchase -100 Usdt</div>
                            <div>
                              Token Distribute -{currentSale.tokenDistribute}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ICO Schedule */}
                </div>
                {/* Main Top End */}
                {/* Main Bottom Start */}
                <div className="row"></div>
                {/* Main Bottom End */}
              </div>
              {/* Homepage Area */}
            </div>
            {/* Layout Main Layout End */}
            {/* Footer Start */}
            <DashboardFooter />
            {/* Footer End */}
          </main>
          {/* Main End */}
        </div>
      </div>
    </div>
  );
}
