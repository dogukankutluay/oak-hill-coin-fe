import Header from 'components/header';
import TopInfo from 'components/top-info';
import UserWelcome from 'components/user-welcome';
import React from 'react';

export default function DepositAddresses() {
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
              {/* Deposit Area */}
              <div className="depositarea">
                {/* HeadTitle */}
                <div className="layoutheadtitle d-sm-flex align-items-end justify-content-between">
                  <div className>
                    <h2 className="page-title">Deposit Addresses</h2>
                  </div>
                  <div className="mt-3 mt-sm-0">
                    <a
                      href="#"
                      className="btn btn-danger btn-sm btn-block w-100"
                      data-toggle="modal"
                      data-target="#withdrawmodal"
                      style={{ display: 'flex' }}
                    >
                      <img
                        src={require('assets/img/Plus-Icon.svg').default}
                        alt="buy"
                        style={{ width: 20, marginInline: '0.1rem' }}
                      />{' '}
                      Create New Deposit Address
                    </a>
                  </div>
                </div>
                {/* HeadTitle */}
                {/* Deposit */}
                <div className="card content-area">
                  <div className="card-innr form-step-fields">
                    {/* Table */}
                    <table className="data-table dt-init user-tnx">
                      <thead>
                        <tr className="data-item data-head">
                          <th className="data-col dt-tnxno">ADDRESESSES</th>
                          <th className="data-col dt-token">CURRENCY</th>
                          <th className="data-col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="data-item">
                          <td className="data-col dt-token">
                            <span className="lead token-amount">
                              TM2ADwsLGWnbWcK19WjX9LW4MG1kzAf4rF
                            </span>
                            <small className="d-block mt-1">
                              *** Please Use This Address For Only{' '}
                              <b>TRON CHAIN</b> Deposits
                            </small>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead">USDT</span>
                          </td>
                          <td className="data-col text-right">
                            <div className="relative d-inline-block d-md-none">
                              <a
                                href="#"
                                className="btn btn-light-alt btn-xs btn-icon toggle-tigger"
                              >
                                <em className="ti ti-more-alt" />
                              </a>
                              <div className="toggle-class dropdown-content dropdown-content-center-left pd-2x">
                                <ul className="data-action-list">
                                  <li>
                                    <a
                                      href="#"
                                      className="btn btn-danger-alt btn-xs btn-icon"
                                    >
                                      <em className="ti ti-trash" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <ul className="data-action-list d-none d-md-inline-flex">
                              <li>
                                <a
                                  href="#"
                                  className="btn btn-danger-alt btn-xs btn-icon"
                                >
                                  <em className="ti ti-trash" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="data-item">
                          <td className="data-col dt-addresesses">
                            <div className="fake-class">
                              <span className="lead tnx-id">
                                TDoZds2EjjX3ovCBLqUxDcSz6QgraEsrxA
                              </span>
                            </div>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead">USDT</span>
                          </td>
                          <td className="data-col text-right">
                            <div className="relative d-inline-block d-md-none">
                              <a
                                href="#"
                                className="btn btn-light-alt btn-xs btn-icon toggle-tigger"
                              >
                                <em className="ti ti-more-alt" />
                              </a>
                              <div className="toggle-class dropdown-content dropdown-content-center-left pd-2x">
                                <ul className="data-action-list">
                                  <li>
                                    <a
                                      href="#"
                                      className="btn btn-danger-alt btn-xs btn-icon"
                                    >
                                      <em className="ti ti-trash" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <ul className="data-action-list d-none d-md-inline-flex">
                              <li>
                                <a
                                  href="#"
                                  className="btn btn-danger-alt btn-xs btn-icon"
                                >
                                  <em className="ti ti-trash" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="data-item">
                          <td className="data-col dt-addresesses">
                            <div className="fake-class">
                              <span className="lead tnx-id">
                                TDoZds2EjjX3ovCBLqUxDcSz6QgraEsrxA
                              </span>
                            </div>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead">USDT</span>
                          </td>
                          <td className="data-col text-right">
                            <div className="relative d-inline-block d-md-none">
                              <a
                                href="#"
                                className="btn btn-light-alt btn-xs btn-icon toggle-tigger"
                              >
                                <em className="ti ti-more-alt" />
                              </a>
                              <div className="toggle-class dropdown-content dropdown-content-center-left pd-2x">
                                <ul className="data-action-list">
                                  <li>
                                    <a
                                      href="#"
                                      className="btn btn-danger-alt btn-xs btn-icon"
                                    >
                                      <em className="ti ti-trash" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <ul className="data-action-list d-none d-md-inline-flex">
                              <li>
                                <a
                                  href="#"
                                  className="btn btn-danger-alt btn-xs btn-icon"
                                >
                                  <em className="ti ti-trash" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* Table */}
                  </div>
                </div>
                {/* Deposit */}
                {/* Modal Add Wallet Start */}
                <div className="modal fade" id="add-addresses" tabIndex={-1}>
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
                        <h4 className="popup-title">
                          Create New Deposit Address
                        </h4>
                        <p>
                          In order to buying{' '}
                          <a href="#">
                            <strong>EDUM Tokens</strong>
                          </a>
                          , you need to deposit your account
                        </p>
                        <form
                          className
                          action
                          autoComplete="off"
                          onsubmit
                          noValidate
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-item input-with-label">
                                <label
                                  htmlFor="swalllet"
                                  className="input-item-label"
                                >
                                  Select Currency
                                </label>
                                <select
                                  className="select-bordered select-block"
                                  name="swalllet"
                                  id="swalllet"
                                >
                                  <option value="USDT">USDT</option>
                                  <option value="AVAX">AVAX</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="gaps-1x" />
                          <div className="d-sm-flex justify-content-between align-items-center">
                            <button className="btn btn-primary">
                              Add Address
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Add Wallet End */}
              </div>
              {/* Deposit Area */}
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
