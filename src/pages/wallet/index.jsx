import DashboardFooter from 'components/dashboard-footer';
import Header from 'components/header';
import TopInfo from 'components/top-info';
import UserWelcome from 'components/user-welcome';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { deposit, payment } from 'requests';
import axios from 'axios';
export default function Wallet() {
  const [deposits, setDeposits] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const token = useSelector((state) => state.user.token);

  const getDatas = async () => {
    try {
      const allDeposit = await deposit.getDepositLog({
        headers: { authorization: `Bearer ${token}` },
      });
      const allPayment = await payment.getPayment({
        headers: { authorization: `Bearer ${token}` },
      });
      axios.all([allDeposit, allPayment]).then(
        axios.spread((...allData) => {
          const depositData = allData[0];
          const paymentData = allData[1];
          setDeposits(depositData.data.logs);
          setTransactions(paymentData.data.payment[0]);
        })
      );
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getDatas();
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
              {/* Wallet Area */}
              <div className="walletarea">
                {/* HeadTitle */}
                <div className="layoutheadtitle d-sm-flex align-items-end justify-content-between">
                  <div className>
                    <h2 className="page-title">Wallet</h2>
                  </div>
                  {/* <div className="mt-3 mt-sm-0">
                    <a
                      href="#"
                      className="btn btn-primary btn-sm btn-block w-100"
                      data-toggle="modal"
                      data-target="#withdrawmodal"
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <img
                        src={
                          require('assets/img/money-bill-wheat-solid.svg')
                            .default
                        }
                        alt
                        style={{ width: 20 }}
                      />
                      Withdraw
                    </a>
                  </div> */}
                </div>
                {/* HeadTitle */}
                {/* Alert */}
                <div className="alertset d-none">
                  <div
                    className="alert alert-sweet alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <div className="alert-flex">
                      <div className="alert-icon">
                        <div className="animation-alert-icons">
                          <div className="alert-icons alert-icons-success">
                            <div className="alert-icons-success-tip" />
                            <div className="alert-icons-success-long" />
                          </div>
                        </div>
                      </div>
                      <div className="alert-desc">
                        <h6 className="alert-heading">Well done!</h6>
                        <p>
                          Aww yeah, you successfully read this important alert
                          message.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div
                    className="alert alert-sweet alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <div className="alert-flex">
                      <div className="alert-icon">
                        <div className="animation-alert-icons">
                          <div className="alert-icons alert-icons-warning">
                            <div className="alert-icons-warning-body" />
                            <div className="alert-icons-warning-dot" />
                          </div>
                        </div>
                      </div>
                      <div className="alert-desc">
                        <h6 className="alert-heading">Warning!</h6>
                        <p>
                          Aww yeah, you successfully read this important alert
                          message.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div
                    className="alert alert-sweet alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <div className="alert-flex">
                      <div className="alert-icon">
                        <div className="animation-alert-icons">
                          <div className="alert-icons alert-icons-error">
                            <div className="alert-icons-error-x">
                              <div className="alert-icons-error-x-left" />
                              <div className="alert-icons-error-x-right" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="alert-desc">
                        <h6 className="alert-heading">Oops...</h6>
                        <p>
                          Aww yeah, you successfully read this important alert
                          message.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                </div>
                {/* Alert */}
                {/* Orders */}
                <div className="card content-area">
                  <div className="card-innr form-step-fields">
                    <div className="card-head">
                      <h4 className="card-title">Orders</h4>
                    </div>
                    <table className="data-table dt-init user-tnx">
                      <thead>
                        <tr className="data-item data-head">
                          <th className="data-col dt-tnxno">Order </th>
                          <th className="data-col dt-token">OAKC Amount</th>
                          <th className="data-col dt-amount">Amount</th>
                          <th className="data-col dt-type text-right">
                            <div className="dt-type-text">Type</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {deposits?.map((item, key) => {
                          return (
                            <tr className="data-item" key={key}>
                              <td className="data-col dt-tnxno">
                                <div className="d-flex align-items-center">
                                  <div className="data-state data-state-approved">
                                    <span className="d-none">Approved</span>
                                  </div>
                                  <div className="fake-class">
                                    {/* <span className="lead tnx-id">TNX1002</span>
                                <span className="sub sub-date">
                                  2018-08-24 10:45PM
                                </span> */}
                                  </div>
                                </div>
                              </td>
                              <td className="data-col dt-token">
                                <span className="lead token-amount">
                                  {item?.ggc}
                                </span>
                                <span className="sub sub-symbol">OAKC</span>
                              </td>
                              <td className="data-col dt-amount">
                                <span className="lead amount-pay">
                                  {item?.usdt}
                                </span>
                                <span className="sub sub-symbol">
                                  USDT
                                  {/* <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="1 ETH = 1250 TWZ"
                              /> */}
                                </span>
                              </td>
                              <td className="data-col dt-type text-right">
                                <span className="dt-type-md badge badge-outline badge-success badge-md">
                                  Purchase
                                </span>
                                <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                                  P
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                        {/* <tr className="data-item">
                          <td className="data-col dt-tnxno">
                            <div className="d-flex align-items-center">
                              <div className="data-state data-state-approved">
                                <span className="d-none">Approved</span>
                              </div>
                              <div className="fake-class">
                                <span className="lead tnx-id">TNX1002</span>
                                <span className="sub sub-date">
                                  2018-08-24 10:45PM
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead token-amount">18,750</span>
                            <span className="sub sub-symbol">TWZ</span>
                          </td>
                          <td className="data-col dt-amount">
                            <span className="lead amount-pay">50.00</span>
                            <span className="sub sub-symbol">
                              ETH
                              <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="1 ETH = 1250 TWZ"
                              />
                            </span>
                          </td>
                          <td className="data-col dt-type text-right">
                            <span className="dt-type-md badge badge-outline badge-success badge-md">
                              Purchase
                            </span>
                            <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                              P
                            </span>
                          </td>
                        </tr>
                        <tr className="data-item">
                          <td className="data-col dt-tnxno">
                            <div className="d-flex align-items-center">
                              <div className="data-state data-state-canceled">
                                <span className="d-none">Canceled</span>
                              </div>
                              <div className="fake-class">
                                <span className="lead tnx-id">TNX1002</span>
                                <span className="sub sub-date">
                                  2018-08-24 10:45PM
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead token-amount">18,750</span>
                            <span className="sub sub-symbol">TWZ</span>
                          </td>
                          <td className="data-col dt-amount">
                            <span className="lead amount-pay">50.00</span>
                            <span className="sub sub-symbol">
                              ETH
                              <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="1 ETH = 1250 TWZ"
                              />
                            </span>
                          </td>
                          <td className="data-col dt-type text-right">
                            <span className="dt-type-md badge badge-outline badge-success badge-md">
                              Purchase
                            </span>
                            <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                              P
                            </span>
                          </td>
                        </tr>
                        <tr className="data-item">
                          <td className="data-col dt-tnxno">
                            <div className="d-flex align-items-center">
                              <div className="data-state data-state-progress">
                                <span className="d-none">Progress</span>
                              </div>
                              <div className="fake-class">
                                <span className="lead tnx-id">TNX1002</span>
                                <span className="sub sub-date">
                                  2018-08-24 10:45PM
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead token-amount">18,750</span>
                            <span className="sub sub-symbol">TWZ</span>
                          </td>
                          <td className="data-col dt-amount">
                            <span className="lead amount-pay">50.00</span>
                            <span className="sub sub-symbol">
                              ETH
                              <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="1 ETH = 1250 TWZ"
                              />
                            </span>
                          </td>
                          <td className="data-col dt-type text-right">
                            <span className="dt-type-md badge badge-outline badge-success badge-md">
                              Purchase
                            </span>
                            <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                              P
                            </span>
                          </td>
                        </tr>
                        <tr className="data-item">
                          <td className="data-col dt-tnxno">
                            <div className="d-flex align-items-center">
                              <div className="data-state data-state-approved">
                                <span className="d-none">Approved</span>
                              </div>
                              <div className="fake-class">
                                <span className="lead tnx-id">TNX1002</span>
                                <span className="sub sub-date">
                                  2018-08-24 10:45PM
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead token-amount">1,050</span>
                            <span className="sub sub-symbol">TWZ</span>
                          </td>
                          <td className="data-col dt-amount">
                            <span className="lead amount-pay">0.85</span>
                            <span className="sub sub-symbol">
                              ETH
                              <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="1 ETH = 1250 TWZ"
                              />
                            </span>
                          </td>
                          <td className="data-col dt-type text-right">
                            <span className="dt-type-md badge badge-outline badge-info badge-md">
                              Bonus
                            </span>
                            <span className="dt-type-sm badge badge-sq badge-outline badge-info badge-md">
                              B
                            </span>
                          </td>
                        </tr>
                        <tr className="data-item">
                          <td className="data-col dt-tnxno">
                            <div className="d-flex align-items-center">
                              <div className="data-state data-state-progress">
                                <span className="d-none">Progress</span>
                              </div>
                              <div className="fake-class">
                                <span className="lead tnx-id">TNX1002</span>
                                <span className="sub sub-date">
                                  2018-08-24 10:45PM
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead token-amount">18,750</span>
                            <span className="sub sub-symbol">TWZ</span>
                          </td>
                          <td className="data-col dt-amount">
                            <span className="lead amount-pay">50.00</span>
                            <span className="sub sub-symbol">
                              ETH
                              <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="1 ETH = 1250 TWZ"
                              />
                            </span>
                          </td>
                          <td className="data-col dt-type text-right">
                            <span className="dt-type-md badge badge-outline badge-success badge-md">
                              Purchase
                            </span>
                            <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                              P
                            </span>
                          </td>
                        </tr>
                        <tr className="data-item">
                          <td className="data-col dt-tnxno">
                            <div className="d-flex align-items-center">
                              <div className="data-state data-state-canceled">
                                <span className="d-none">Canceled</span>
                              </div>
                              <div className="fake-class text-right">
                                <span className="lead tnx-id">TNX1002</span>
                                <span className="sub sub-date">
                                  2018-08-24 10:45PM
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead token-amount">18,750</span>
                            <span className="sub sub-symbol">TWZ</span>
                          </td>
                          <td className="data-col dt-amount">
                            <span className="lead amount-pay">50.00</span>
                            <span className="sub sub-symbol">
                              ETH
                              <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="1 ETH = 1250 TWZ"
                              />
                            </span>
                          </td>
                          <td className="data-col dt-type text-right">
                            <span className="dt-type-md badge badge-outline badge-success badge-md">
                              Purchase
                            </span>
                            <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                              P
                            </span>
                          </td>
                        </tr>
                        <tr className="data-item">
                          <td className="data-col dt-tnxno">
                            <div className="d-flex align-items-center">
                              <div className="data-state data-state-progress">
                                <span className="d-none">Progress</span>
                              </div>
                              <div className="fake-class">
                                <span className="lead tnx-id">TNX1002</span>
                                <span className="sub sub-date">
                                  2018-08-24 10:45PM
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead token-amount">18,750</span>
                            <span className="sub sub-symbol">TWZ</span>
                          </td>
                          <td className="data-col dt-amount">
                            <span className="lead amount-pay">50.00</span>
                            <span className="sub sub-symbol">
                              ETH
                              <em
                                className="fas fa-info-circle"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="1 ETH = 1250 TWZ"
                              />
                            </span>
                          </td>
                          <td className="data-col dt-type text-right">
                            <span className="dt-type-md badge badge-outline badge-success badge-md">
                              Purchase
                            </span>
                            <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                              P
                            </span>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                    {/* <div class="dataTables_paginate paging_simple_numbers">
                      <ul class="pagination">
                        <li
                          class="paginate_button page-item previous"
                          id="DataTables_Table_0_previous"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                          >
                            Prev
                          </a>
                        </li>
                        <li class="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                          >
                            2
                          </a>
                        </li>
                        <li
                          class="paginate_button page-item next disabled"
                          id="DataTables_Table_0_next"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="3"
                            tabindex="0"
                            class="page-link"
                          >
                            Next
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                {/* Orders */}
                {/* Transaction */}
                <div className="card content-area">
                  <div className="card-innr form-step-fields">
                    <div className="card-head">
                      <h4 className="card-title">User Transactions</h4>
                    </div>
                    <table
                      className="data-table dt-init user-tnx dataTable no-footer"
                      id="DataTables_Table_1"
                      role="grid"
                      aria-describedby="DataTables_Table_1_info"
                    >
                      <thead>
                        <tr className="data-item data-head" role="row">
                          <th
                            className="data-col dt-tnxno sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                          >
                            Name
                          </th>
                          <th
                            className="data-col dt-token sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                          >
                            Amount
                          </th>
                          <th
                            className="data-col dt-amount sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                          >
                            Address
                          </th>
                          {/* <th
                            className="data-col dt-amount sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                          >
                            Transaction Id
                          </th> */}
                          <th className="data-col dt-type text-right">
                            <div className="dt-type-text">Type</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions?.verified_payment?.map((item, key) => {
                          return (
                            <tr className="data-item odd" role="row" key={key}>
                              <td className="data-col dt-tnxno">
                                <div className="d-flex align-items-center">
                                  <div className="data-state data-state-approved">
                                    <span className="d-none">Confirmed</span>
                                  </div>
                                  <div className="fake-class">
                                    <span className="lead tnx-id">
                                      {item.tokenName}
                                    </span>
                                    <span className="sub sub-date">
                                      {/* 01/03/2022 13:27:08 */}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="data-col dt-token">
                                <span className="lead token-amount">
                                  {item.amount}
                                </span>
                              </td>
                              <td className="data-col dt-amount">
                                <a
                                  href={`https://tronscan.org/#/address/${item.tokenId}`}
                                  target="_blank"
                                >
                                  <span
                                    className="lead amount-pay textoverflowellipsis"
                                    style={{ maxWidth: 150 }}
                                  >
                                    {item.tokenId}
                                  </span>
                                </a>
                              </td>
                              {/* <td className="data-col dt-amount">
                                <a
                                  href="https://tronscan.org/#/transaction/9222810110fbff9798a7007bc8c99efc07adc9f1c9f6ab7ec369756723209836"
                                  target="_blank"
                                >
                                  <span
                                    className="lead amount-pay textoverflowellipsis"
                                    style={{ maxWidth: 150 }}
                                  >
                                    9222810110fbff9798a7007bc8c99efc07adc9f1c9f6ab7ec369756723209836
                                  </span>
                                </a>
                              </td> */}
                              <td className="data-col dt-type text-right">
                                <span className="dt-type-md badge badge-outline badge-success badge-md">
                                  Deposit
                                </span>
                                <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                                  D
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                        {/* <tr className="data-item odd" role="row">
                          <td className="data-col dt-tnxno">
                            <div className="d-flex align-items-center">
                              <div className="data-state data-state-approved">
                                <span className="d-none">Confirmed</span>
                              </div>
                              <div className="fake-class">
                                <span className="lead tnx-id">Tether</span>
                                <span className="sub sub-date">
                                  01/03/2022 13:27:08
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="data-col dt-token">
                            <span className="lead token-amount">
                              10.00000000
                            </span>
                          </td>
                          <td className="data-col dt-amount">
                            <a
                              href="https://tronscan.org/#/address/TSibsdi6C8Bd9eNYNZ534cYKEwyfTdzq3T"
                              target="_blank"
                            >
                              <span
                                className="lead amount-pay textoverflowellipsis"
                                style={{ maxWidth: 150 }}
                              >
                                TSibsdi6C8Bd9eNYNZ534cYKEwyfTdzq3T
                              </span>
                            </a>
                          </td>
                          <td className="data-col dt-amount">
                            <a
                              href="https://tronscan.org/#/transaction/9222810110fbff9798a7007bc8c99efc07adc9f1c9f6ab7ec369756723209836"
                              target="_blank"
                            >
                              <span
                                className="lead amount-pay textoverflowellipsis"
                                style={{ maxWidth: 150 }}
                              >
                                9222810110fbff9798a7007bc8c99efc07adc9f1c9f6ab7ec369756723209836
                              </span>
                            </a>
                          </td>
                          <td className="data-col dt-type text-right">
                            <span className="dt-type-md badge badge-outline badge-danger badge-md">
                              Withdraw
                            </span>
                            <span className="dt-type-sm badge badge-sq badge-outline badge-danger badge-md">
                              W
                            </span>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                    {/* <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_1_paginate"
                    >
                      <ul class="pagination">
                        <li
                          class="paginate_button page-item previous disabled"
                          id="DataTables_Table_1_previous"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_1"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                          >
                            Prev
                          </a>
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_1"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li
                          class="paginate_button page-item next disabled"
                          id="DataTables_Table_1_next"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_1"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                          >
                            Next
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                {/* Transaction */}
                {/* Transaction Modal Start */}
                <div
                  className="modal fade"
                  id="transaction-details"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-dialog-lg modal-dialog-centered">
                    <div className="modal-content">
                      <a
                        href="#"
                        className="modal-close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <em className="ti ti-close" />
                      </a>
                      <div className="popup-body popup-body-lg">
                        <div className="content-area">
                          <div className="card-head d-flex justify-content-between align-items-center">
                            <h4 className="card-title mb-0">
                              Transaction Details
                            </h4>
                          </div>
                          <div className="gaps-1-5x" />
                          <div className="data-details d-md-flex">
                            <div className="fake-class">
                              <span className="data-details-title">
                                Tranx Date
                              </span>
                              <span className="data-details-info">
                                24 Jul, 2018 10:11PM
                              </span>
                            </div>
                            <div className="fake-class">
                              <span className="data-details-title">
                                Tranx Status
                              </span>
                              <span className="badge badge-success ucap">
                                Approved
                              </span>
                            </div>
                            <div className="fake-class">
                              <span className="data-details-title">
                                Tranx Approved Note
                              </span>
                              <span className="data-details-info">
                                By
                                <strong>Admin</strong> at 24 Jul, 2018 10:12PM
                              </span>
                            </div>
                          </div>
                          <div className="gaps-3x" />
                          <h6 className="card-sub-title">Transaction Info</h6>
                          <ul className="data-details-list">
                            <li>
                              <div className="data-details-head">
                                Transaction Type
                              </div>
                              <div className="data-details-des">
                                <strong>Purchase</strong>
                              </div>
                            </li>
                            <li>
                              <div className="data-details-head">
                                Payment Getway
                              </div>
                              <div className="data-details-des">
                                <strong>
                                  Ethereum <small>- Offline Payment</small>
                                </strong>
                              </div>
                            </li>
                            <li>
                              <div className="data-details-head">
                                Deposit From
                              </div>
                              <div className="data-details-des">
                                <strong>
                                  0xa87d264f935920005810653734156d3342d5c385
                                </strong>
                              </div>
                            </li>
                            <li>
                              <div className="data-details-head">Tx Hash</div>
                              <div className="data-details-des">
                                <span>
                                  Tx156d3342d5c87d264f9359200xa058106537340385c87d264f93
                                </span>
                                <span />
                              </div>
                            </li>
                            <li>
                              <div className="data-details-head">
                                Deposit To
                              </div>
                              <div className="data-details-des">
                                <span>
                                  0xa058106537340385156d3342d5c87d264f935920
                                </span>
                                <span />
                              </div>
                            </li>
                            <li>
                              <div className="data-details-head">Details</div>
                              <div className="data-details-des">
                                Tokens Purchase
                              </div>
                            </li>
                          </ul>
                          <div className="gaps-3x" />
                          <h6 className="card-sub-title">Token Details</h6>
                          <ul className="data-details-list">
                            <li>
                              <div className="data-details-head">
                                Stage Name
                              </div>
                              <div className="data-details-des">
                                <strong>ICO Phase 3</strong>
                              </div>
                            </li>
                            <li>
                              <div className="data-details-head">
                                Contribution
                              </div>
                              <div className="data-details-des">
                                <span>
                                  <strong>1.000 ETH</strong>{' '}
                                  <em
                                    className="fas fa-info-circle"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title
                                    data-original-title="1 ETH = 100 TWZ"
                                  />
                                </span>
                                <span>
                                  <em
                                    className="fas fa-info-circle"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title
                                    data-original-title="1 ETH = 100 TWZ"
                                  />
                                  $2540.65
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="data-details-head">
                                Tokens Added To
                              </div>
                              <div className="data-details-des">
                                <strong>
                                  UD1020001 <small>- infoicox@gmail..com</small>
                                </strong>
                              </div>
                            </li>
                            <li>
                              <div className="data-details-head">Token (T)</div>
                              <div className="data-details-des">
                                <span>4,780.00</span>
                                <span>(4780 * 1)</span>
                              </div>
                            </li>
                            <li>
                              <div className="data-details-head">
                                Bonus Tokens (B)
                              </div>
                              <div className="data-details-des">
                                <span>956.00</span>
                                <span>(956 * 1)</span>
                              </div>
                            </li>
                            <li>
                              <div className="data-details-head">
                                Total Tokens
                              </div>
                              <div className="data-details-des">
                                <span>
                                  <strong>5,736.00</strong>
                                </span>
                                <span>(T+B)</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Transaction Modal End */}
                {/* Modal Withdraw Start */}
                <div className="modal fade" id="withdrawmodal" tabIndex={-1}>
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
                        <h4 className="popup-title">Withdraw Address</h4>
                        <p>Please type the address in the input box below.</p>
                        <form
                          className="form-validate"
                          action
                          autoComplete="off"
                          onsubmit
                          noValidate
                        >
                          <div className="input-item input-with-label">
                            <div className="input-wrap">
                              <label
                                htmlFor="sendstoken"
                                className="input-item-label"
                              >
                                Select
                              </label>
                              <select
                                className="select-bordered required select-block"
                                name="currency"
                                id="sendstoken"
                              >
                                <option value="usdt">Tether (USDT)</option>
                              </select>
                            </div>
                          </div>
                          <div className="input-item input-with-label">
                            <div className="input-wrap">
                              <label
                                htmlFor="token-address"
                                className="input-item-label"
                              >
                                Your Address
                              </label>
                              <input
                                className="input-bordered required"
                                type="text"
                                id="token-address"
                                name="address"
                                defaultValue
                                placeholder="Your Address"
                              />
                            </div>
                          </div>
                          <div className="input-item input-with-label">
                            <div className="input-wrap">
                              <label
                                htmlFor="token-address"
                                className="input-item-label"
                              >
                                Amount
                              </label>
                              <input
                                className="input-bordered inputfilter-cyrpto required"
                                type="text"
                                id="token-address"
                                name="amount"
                                defaultValue
                                placeholder="Amount"
                              />
                            </div>
                          </div>
                          <div className="note note-plane note-danger">
                            <em className="fas fa-info-circle" />
                            <p>Note: Address should be TRON-compliant.</p>
                            <p>
                              DO NOT USE your exchange wallet address such as
                              Kraken, Bitfinex, Bithumb, Binance etc. You can
                              use MetaMask, MayEtherWallet, Mist wallets etc. Do
                              not use the address if you don’t have a private
                              key of the your address. You WILL NOT receive
                              OAKCs and WILL LOSE YOUR FUNDS if you do.
                            </p>
                          </div>
                          <div className="gaps-3x" />
                          <div className="d-sm-flex justify-content-between align-items-center">
                            <button className="btn btn-primary" type="submit">
                              Request
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Withdraw End */}
              </div>
              {/* Wallet Area */}
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
    </div>
  );
}
