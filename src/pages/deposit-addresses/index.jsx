import DashboardFooter from 'components/dashboard-footer';
import Header from 'components/header';
import TopInfo from 'components/top-info';
import UserWelcome from 'components/user-welcome';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { deposit } from 'requests';

export default function DepositAddresses() {
  const token = useSelector((state) => state.user.token);
  const [addresses, setAddresses] = useState([]);
  const createDeposit = async (e) => {
    try {
      const { data } = await deposit.createDeposit({
        headers: { authorization: `Bearer ${token}` },
      });
      if (data.success) {
        window.location.reload();
      }
    } catch (error) {}
  };

  const getAddresses = async () => {
    try {
      const { data } = await deposit.getDeposit({
        headers: { authorization: `Bearer ${token}` },
      });
      setAddresses(data.deposits);
    } catch (error) {}
  };
  useEffect(() => {
    getAddresses();
  }, []);
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
                    <button
                      href=""
                      className="btn btn-danger btn-sm btn-block w-100"
                      data-toggle="modal"
                      data-target="#withdrawmodal"
                      style={{ display: 'flex' }}
                      onClick={createDeposit}
                    >
                      <img
                        src={require('assets/img/Plus-Icon.svg').default}
                        alt="buy"
                        style={{ width: 20, marginInline: '0.1rem' }}
                      />{' '}
                      Create New Deposit Address
                    </button>
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
                        {addresses.map((address, index) => {
                          return (
                            <tr className="data-item">
                              <td className="data-col dt-token">
                                <span className="lead token-amount">
                                  {address.address}
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
                                  <button className="btn btn-light-alt btn-xs btn-icon toggle-tigger">
                                    <em className="ti ti-more-alt" />
                                  </button>
                                  <div className="toggle-class dropdown-content dropdown-content-center-left pd-2x">
                                    <ul className="data-action-list">
                                      <li>
                                        <button className="btn btn-danger-alt btn-xs btn-icon">
                                          <em className="ti ti-trash" />
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <ul className="data-action-list d-none d-md-inline-flex">
                                  <li>
                                    <button className="btn btn-danger-alt btn-xs btn-icon">
                                      <em className="ti ti-trash" />
                                    </button>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          );
                        })}
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
                          <a href="">
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
