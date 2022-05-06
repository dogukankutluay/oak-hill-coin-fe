import Header from 'components/header';
import React from 'react';
import Password from './tabs/Password';
import PersonalData from './tabs/PersonalData';
// import Settings from './tabs/Settings';
import { useState } from 'react';
import UserWelcome from 'components/user-welcome';
import TopInfo from 'components/top-info';
export default function Profile() {
  const [tab, setTab] = useState(0);
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
              {/* Profile Area */}
              <div className="profilearea">
                {/* HeadTitle */}
                <div className="layoutheadtitle">
                  <h2 className="page-title">Profile Details</h2>
                </div>
                {/* HeadTitle */}
                {/* Profile Tabs */}
                <div className="content-area card">
                  <div className="card-innr form-step-fields">
                    <ul className="nav nav-tabs nav-tabs-line" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${tab === 0 && 'active'}`}
                          href="#personal-data"
                          data-toggle="tab"
                          onClick={() => setTab(0)}
                        >
                          Personal Data
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a
                          className={`nav-link ${tab === 1 && 'active'}`}
                          href="#settings"
                          data-toggle="tab"
                          onClick={() => setTab(1)}
                        >
                          Settings
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a
                          className={`nav-link ${tab === 1 && 'active'}`}
                          href="#password"
                          data-toggle="tab"
                          onClick={() => setTab(1)}
                        >
                          Password
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      {tab === 0 && <PersonalData />}
                      {/* {tab === 1 && <Settings />} */}
                      {tab === 1 && <Password />}
                    </div>
                  </div>
                </div>
                {/* Profile Tabs */}

                {/* Receiving Wallet */}
                <div className="account-info card">
                  <div className="card-innr">
                    <h6 className="card-title card-title-sm">
                      Receiving Wallet
                    </h6>
                    <div className="d-flex justify-content-between">
                      <span>
                        <span>0x39deb3.....e2ac64rd</span>
                        <em
                          className="fas fa-info-circle text-exlight"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="1 AVAX = 100 EDUM"
                        />
                      </span>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#edit-wallet"
                        className="link link-ucap"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
                {/* Receiving Wallet */}
                {/* Modal Edit Wallet */}
                <div className="modal fade" id="edit-wallet" tabIndex={-1}>
                  <div className="modal-dialog modal-dialog-md modal-dialog-centered">
                    <div className="modal-content">
                      <a
                        href="#"
                        className="modal-close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <em className="ti ti-close" />
                      </a>
                      <div className="popup-body">
                        <h4 className="popup-title">Wallet Address</h4>
                        <p>
                          In order to receive your{' '}
                          <a href="#">
                            <strong>EDUM Tokens</strong>
                          </a>
                          , please select your wallet address and you have to
                          put the address below input box.
                          <strong>
                            You will receive EDUM tokens to this address after
                            the Token Sale end.
                          </strong>
                        </p>
                        <form action="#">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-item input-with-label">
                                <label
                                  htmlFor="swalllet"
                                  className="input-item-label"
                                >
                                  Select Wallet
                                </label>
                                <select
                                  id="swalllet"
                                  className="select-bordered select-block"
                                  name="swalllet"
                                >
                                  <option value="eth">Ethereum</option>
                                  <option value="dac">DashCoin</option>
                                  <option value="bic">BitCoin</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="input-item input-with-label">
                            <label
                              htmlFor="token-address"
                              className="input-item-label"
                            >
                              Your Address for tokens:
                            </label>
                            <input
                              className="input-bordered"
                              type="text"
                              id="token-address"
                              name="token-address"
                              defaultValue="0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae"
                            />
                            <span className="input-note">
                              Note: Address should be ERC20-compliant.
                            </span>
                          </div>
                          <div className="note note-plane note-danger">
                            <em className="fas fa-info-circle" />
                            <p>
                              DO NOT USE your exchange wallet address such as
                              Kraken, Bitfinex, Bithumb, Binance etc. You can
                              use MetaMask, MayEtherWallet, Mist wallets etc. Do
                              not use the address if you don’t have a private
                              key of the your address. You WILL NOT receive EDUM
                              Tokens and WILL LOSE YOUR FUNDS if you do.
                            </p>
                          </div>
                          <div className="gaps-3x" />
                          <div className="d-sm-flex justify-content-between align-items-center">
                            <button className="btn btn-primary">
                              Update Wallet
                            </button>
                            <div className="gaps-2x d-sm-none" />
                            <span className="text-success">
                              <em className="ti ti-check-box" /> Updated wallet
                              address
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Edit Wallet */}
              </div>
              {/* Profile Area */}
            </div>
            {/* Layout Main Layout Start */}
            {/* Footer Start */}
            <footer className="footer-bar">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-8">
                  <ul className="footer-links">
                    <li>
                      <a href="javascript:void 0;">Litepaper</a>
                    </li>
                    <li>
                      <a href="javascript:void 0;">FAQs</a>
                    </li>
                    <li>
                      <a href="javascript:void 0;">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="javascript:void 0;">Terms of Contitions</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mt-2 mt-sm-0">
                  <div className="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
                    <div className="copyright-text">© 2022 Oakin</div>
                    <div className="lang-switch relative d-none">
                      <select
                        className="select-bordered select-block"
                        name="langswitch"
                      >
                        <option value="EN" selected>
                          EN
                        </option>
                        <option value="TR">TR</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
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
