import Header from 'components/header';
import Sidebar from 'components/sidebar';
import TopInfo from 'components/top-info';
import UserWelcome from 'components/user-welcome';
import React from 'react';

export default function BuyToken() {
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
              {/* Buy Token Area */}
              <div className="buytokensarea">
                {/* HeadTitle */}
                <div className="layoutheadtitle">
                  <h2 className="page-title">Buy Tokens</h2>
                </div>
                {/* HeadTitle */}
                {/* Buy Token Steps */}
                <div className="content-area card">
                  <div className="card-innr p-0">
                    <form
                      className="siteform form-validate"
                      action
                      autoComplete="off"
                      onsubmit
                      noValidate
                    >
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
                                Aww yeah, you successfully read this important
                                alert message.
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
                                Aww yeah, you successfully read this important
                                alert message.
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
                                Aww yeah, you successfully read this important
                                alert message.
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
                      {/* Step 01 */}
                      <div className="form-step-fields">
                        <div className="card-head">
                          <span className="card-sub-title text-orange font-mid">
                            Step 1
                          </span>
                          <h4 className="card-title card-title-sm">
                            Select Options
                          </h4>
                        </div>
                        <div className="card-text">
                          <p>
                            Choose the distribution which you want to
                            participate
                          </p>
                        </div>
                        <div className="token-currency-choose">
                          <div className="row guttar-15px">
                            <div className="col-md-4">
                              <div className="pay-option">
                                <input
                                  className="pay-option-check"
                                  type="radio"
                                  id="krc01"
                                  defaultValue={1}
                                  name="tokenOption"
                                  defaultChecked
                                />
                                <label
                                  className="pay-option-label"
                                  htmlFor="krc01"
                                >
                                  <span className="pay-title mb-2">
                                    <span className="pay-cur">Option-01</span>
                                  </span>
                                  <span>1 OAKC = 0.10 USDT</span>
                                  <span className="mt-2">
                                    Tokens will be locked for 12 month then 100%
                                    of them will be released at the end of
                                    period.
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Step 01 */}
                      {/* Step 02 */}
                      <div className="form-step-fields">
                        <div className="card-head">
                          <span className="card-sub-title text-orange font-mid">
                            Step 2
                          </span>
                          <h4 className="card-title card-title-sm">
                            Amount of contribute
                          </h4>
                        </div>
                        <div className="card-text">
                          <p>
                            Enter your amount, you would like to contribute and
                            calculate the amount of token you will received. The
                            calculator helps to convert required currency to
                            tokens.
                          </p>
                        </div>
                        <div className="token-contribute">
                          <div className="token-calc">
                            <div className="token-pay-amount">
                              <div className="input-item p-0">
                                <div className="input-wrap">
                                  <input
                                    id="token-base-amount"
                                    name="selling_amount"
                                    className="input-bordered required inputfilter-cyrpto"
                                    type="text"
                                    placeholder="Amount"
                                    defaultValue
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="token-received">
                              <div className="token-eq-sign" />
                              <div className="token-received-amount">
                                <h5 className="token-amount">0</h5>
                                <div className="token-symbol text-orange font-mid mt-1">
                                  Total OAKC
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="token-calc-note note note-plane">
                            <em className="fas fa-times-circle text-danger" />
                            <span className="note-text text-light">
                              Minimum 100 USDT
                            </span>
                          </div>
                          <div className="note note-plane note-danger note-sm pdt-1x pl-0">
                            <p>
                              Your Contribution will be calculated based on
                              exchange rate at the moment your transaction is
                              confirm.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Step 02 */}
                      {/* Step 03 */}
                      <div className="form-step-fields">
                        <div className="card-head">
                          <span className="card-sub-title text-orange font-mid">
                            Step 3
                          </span>
                          <h4 className="card-title card-title-sm">
                            Place Order
                          </h4>
                        </div>
                        <div className="card-text">
                          <p>
                            To get tokens please make a payment. You can send
                            payment directly to our address or you may pay
                            online. Once you paid, you will receive an email
                            about the successfull deposit.{' '}
                          </p>
                        </div>
                        <div className="pay-buttons">
                          <div className="pay-button">
                            <button
                              className="btn btn-success btn-between w-100"
                              type="submit"
                            >
                              Buy OAKC
                              <em className="ti ti-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Step 03 */}
                      {/* Notes */}
                      <div className="pay-notes mt-0">
                        <div className="note note-plane note-light note-md font-italic">
                          <em className="fas fa-info-circle" />
                          <p>
                            Tokens will appear in your account after payment
                            successfully made and approved by our team.{' '}
                            <br className="d-none d-lg-block" /> Please note
                            that, Oakins will distributed end of ICO Token
                            Sales.{' '}
                          </p>
                        </div>
                      </div>
                      {/* Notes */}
                    </form>
                  </div>
                </div>
                {/* Buy Token Steps */}
                {/* Modal Add Wallet Start */}
                <div className="modal fade" id="add-wallet" tabIndex={-1}>
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
                            <strong>Oakins</strong>
                          </a>
                          , please select your wallet address and you have to
                          put the address below input box.
                          <strong>
                            You will receive Oakins to this address after the
                            Token Sale end.
                          </strong>
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
                                  Select Wallet
                                </label>
                                <select
                                  className="select-bordered select-block"
                                  name="swalllet"
                                  id="swalllet"
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
                              key of the your address. You WILL NOT receive
                              Oakins and WILL LOSE YOUR FUNDS if you do.
                            </p>
                          </div>
                          <div className="gaps-3x" />
                          <div className="d-sm-flex justify-content-between align-items-center">
                            <button className="btn btn-primary">
                              Add Wallet
                            </button>
                            <div className="gaps-2x d-sm-none" />
                            <span className="text-success">
                              <em className="ti ti-check-box" /> Added wallet
                              address
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Add Wallet End */}
                {/* Modal Get Pay Address Start */}
                <div className="modal fade" id="get-pay-address" tabIndex={-1}>
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
                          Payment Address for Deposit
                        </h4>
                        <p>
                          Please make deposit amount of <strong>1.0 ETH</strong>{' '}
                          to our address and receive{' '}
                          <strong className="text-cyan">18,750 Oakin</strong>{' '}
                          tokens including
                          <strong className="text-cyan">
                            bonus 1,540 Oakin
                          </strong>{' '}
                          once we recevied payment.
                        </p>
                        <div className="gaps-1x" />
                        <h6 className="font-bold">
                          Payment to the following Address
                        </h6>
                        <div className="copy-wrap mgb-0-5x">
                          <span className="copy-feedback" />
                          <em className="fab fa-ethereum" />
                          <input
                            type="text"
                            className="copy-address"
                            defaultValue="0x4156d3342d5c385a87d264f90653733592000581"
                            disabled
                          />
                          <button
                            className="copy-trigger copy-clipboard"
                            data-clipboard-text="0x4156d3342d5c385a87d264f90653733592000581"
                          >
                            <em className="ti ti-files" />
                          </button>
                        </div>
                        <ul className="pay-info-list row">
                          <li className="col-sm-6">
                            <span>SET GAS LIMIT:</span> 120 000
                          </li>
                          <li className="col-sm-6">
                            <span>SET GAS PRICE:</span> 95 Gwei
                          </li>
                        </ul>
                        <div className="pdb-2-5x pdt-1-5x">
                          <input
                            type="checkbox"
                            className="input-checkbox input-checkbox-md"
                            id="agree-term"
                          />
                          <label htmlFor="agree-term">
                            I hereby agree to the{' '}
                            <strong>
                              token purchase aggrement &amp; token sale term
                            </strong>
                            .
                          </label>
                        </div>
                        <button
                          className="btn btn-success"
                          data-dismiss="modal"
                          data-toggle="modal"
                          data-target="#pay-confirm"
                        >
                          Buy Tokens Now{' '}
                          <em className="ti ti-arrow-right mgl-4-5x" />
                        </button>
                        <div className="gaps-3x" />
                        <div className="note note-plane note-light mgb-1x">
                          <em className="fas fa-info-circle" />
                          <p>
                            Do not make payment through exchange (Kraken,
                            Bitfinex). You can use MayEtherWallet, MetaMask,
                            Mist wallets etc.
                          </p>
                        </div>
                        <div className="note note-plane note-danger">
                          <em className="fas fa-info-circle" />
                          <p>
                            In case you send a different amount, number of
                            Oakins will update accordingly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Get Pay Address End */}
                {/* Modal Pay Online Start */}
                <div className="modal fade" id="pay-online" tabIndex={-1}>
                  <div className="modal-dialog modal-dialog-md modal-dialog-centered">
                    <div className="modal-content pb-0">
                      <div className="popup-body">
                        <h4 className="popup-title">Buy Tokens and Payment</h4>
                        <p className="lead">
                          To receiving{' '}
                          <strong className="text-cyan">18,750 Oakin</strong>
                          tokens including{' '}
                          <strong className="text-cyan">
                            bonus 1,540 Oakin
                          </strong>
                          require payment amount of <strong>1.0 ETH</strong>.
                        </p>
                        <p>
                          You can choose any of following payment method to make
                          your payment. The tokens balance will appear in your
                          account after successfull payment.
                        </p>
                        <h5 className="mgt-1-5x font-mid">
                          Select payment method:
                        </h5>
                        <ul className="pay-list guttar-20px">
                          <li className="pay-item">
                            <input
                              type="radio"
                              className="pay-check"
                              name="pay-option"
                              id="pay-coin"
                            />
                            <label
                              className="pay-check-label"
                              htmlFor="pay-coin"
                            >
                              <img
                                src="../assets/img/pay-a.png"
                                alt="pay-logo"
                              />
                            </label>
                          </li>
                          <li className="pay-item">
                            <input
                              type="radio"
                              className="pay-check"
                              name="pay-option"
                              id="pay-coinpay"
                            />
                            <label
                              className="pay-check-label"
                              htmlFor="pay-coinpay"
                            >
                              <img
                                src="../assets/img/pay-b.png"
                                alt="pay-logo"
                              />
                            </label>
                          </li>
                          <li className="pay-item">
                            <input
                              type="radio"
                              className="pay-check"
                              name="pay-option"
                              id="pay-paypal"
                            />
                            <label
                              className="pay-check-label"
                              htmlFor="pay-paypal"
                            >
                              <img
                                src="../assets/img/pay-c.png"
                                alt="pay-logo"
                              />
                            </label>
                          </li>
                        </ul>
                        <span className="text-light font-italic mgb-2x">
                          <small>
                            * Payment gateway company may charge you a
                            processing fees.
                          </small>
                        </span>
                        <div className="pdb-2-5x pdt-1-5x">
                          <input
                            type="checkbox"
                            className="input-checkbox input-checkbox-md"
                            id="agree-term-3"
                          />
                          <label htmlFor="agree-term-3">
                            I hereby agree to the{' '}
                            <strong>
                              token purchase aggrement &amp; token sale term
                            </strong>
                            .
                          </label>
                        </div>
                        <ul className="d-flex flex-wrap align-items-center guttar-30px">
                          <li>
                            <a
                              href="#"
                              data-dismiss="modal"
                              data-toggle="modal"
                              data-target="#pay-review"
                              className="btn btn-primary"
                            >
                              Buy Tokens &amp; Process to Pay{' '}
                              <em className="ti ti-arrow-right mgl-2x" />
                            </a>
                          </li>
                          <li className="pdt-1x pdb-1x">
                            <a
                              href="#"
                              data-dismiss="modal"
                              data-toggle="modal"
                              data-target="#get-pay-address"
                              className="link link-primary"
                            >
                              Make Manual Payment
                            </a>
                          </li>
                        </ul>
                        <div className="gaps-2x" />
                        <div className="gaps-1x d-none d-sm-block" />
                        <div className="note note-plane note-light mgb-1x">
                          <em className="fas fa-info-circle" />
                          <p className="text-light">
                            You will automatically redirect for payment after
                            your order placing.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* .modal-content */}
                  </div>
                  {/* .modal-dialog */}
                </div>
                {/* Modal Pay Online End */}
                {/* Modal Pay Coingate Start */}
                <div className="modal fade" id="pay-coingate" tabIndex={-1}>
                  <div className="modal-dialog modal-dialog-md modal-dialog-centered">
                    <div className="modal-content">
                      <div className="popup-body">
                        <h4 className="popup-title">Buy Tokens and Payment</h4>
                        <p className="lead">
                          To receiving{' '}
                          <strong className="text-cyan">18,750 Oakin</strong>
                          tokens including{' '}
                          <strong className="text-cyan">
                            bonus 1,540 Oakin
                          </strong>
                          require payment amount of <strong>1.0 ETH</strong>.
                        </p>
                        <p>
                          You can pay via online payment geteway{' '}
                          <strong>“Coingate”</strong>. It’s safe and secure.
                        </p>
                        <div className="pdb-2-5x pdt-1-5x">
                          <input
                            type="checkbox"
                            className="input-checkbox input-checkbox-md"
                            id="agree-term-2"
                          />
                          <label htmlFor="agree-term-2">
                            I hereby agree to the{' '}
                            <strong>
                              token purchase aggrement &amp; token sale term
                            </strong>
                            .
                          </label>
                        </div>
                        <button
                          className="btn btn-primary"
                          data-dismiss="modal"
                          data-toggle="modal"
                          data-target="#pay-thanks"
                        >
                          Place Order &amp; Process to Pay{' '}
                          <em className="ti ti-arrow-right mgl-4-5x" />
                        </button>
                        <div className="gaps-3x" />
                        <div className="note note-plane note-light mgb-1x">
                          <em className="fas fa-info-circle" />
                          <p>
                            You will automatically redirect to Coingate website
                            for payment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Pay Coingate End */}
                {/* Modal Pay Review Start */}
                <div className="modal fade" id="pay-review" tabIndex={-1}>
                  <div className="modal-dialog modal-dialog-md modal-dialog-centered">
                    <div className="modal-content">
                      <div className="popup-body text-center">
                        <div className="gaps-2x" />
                        <div className="pay-status pay-status-success">
                          <em className="ti ti-check" />
                        </div>
                        <div className="gaps-2x" />
                        <h3>We’re reviewing your payment.</h3>
                        <p>
                          We’ll review your transaction and get back to your
                          within 6 hours. You’ll receive an email with the
                          details of your contribution.
                        </p>
                        <div className="gaps-2x" />
                        <a href="#" className="btn btn-primary">
                          View Transaction
                        </a>
                        <div className="gaps-1x" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Pay Review End */}
                {/* Modal Pay Confirm Start */}
                <div className="modal fade" id="pay-confirm" tabIndex={-1}>
                  <div className="modal-dialog modal-dialog-md modal-dialog-centered">
                    <div className="modal-content">
                      <div className="popup-body">
                        <h4 className="popup-title">
                          Confirmation Your Payment
                        </h4>
                        <p className="lead">
                          Your Order number{' '}
                          <strong className="text-cyan">TNX93KR8N0</strong>
                          has been placed successfully.{' '}
                        </p>
                        <p>
                          The tokens balance will appear in your account only
                          after you transaction gets 6 confirmations and
                          approved our team.
                        </p>
                        <p>
                          To <strong>speed up verifcation</strong> proccesing
                          please enter <strong>your wallet address</strong> from
                          where you’ll transferring your ethereum to our
                          address.
                        </p>
                        <div className="input-item input-with-label">
                          <label
                            htmlFor="token-address"
                            className="input-item-label"
                          >
                            Enter your wallet address
                          </label>
                          <input
                            className="input-bordered"
                            type="text"
                            defaultValue="0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae"
                          />
                        </div>
                        <ul className="d-flex flex-wrap align-items-center guttar-30px">
                          <li>
                            <a
                              className="btn btn-success"
                              href="#"
                              data-dismiss="modal"
                              data-toggle="modal"
                              data-target="#pay-review"
                            >
                              Confirm Payment
                            </a>
                          </li>
                          <li className="pdt-1x pdb-1x">
                            <a
                              href="#"
                              data-dismiss="modal"
                              data-toggle="modal"
                              data-target="#pay-online"
                              className="link link-primary"
                            >
                              Make Online Payment
                            </a>
                          </li>
                        </ul>
                        <div className="gaps-2x" />
                        <div className="gaps-1x d-none d-sm-block" />
                        <div className="note note-plane note-light mgb-1x">
                          <em className="fas fa-info-circle" />
                          <p>
                            Do not make payment through exchange (Kraken,
                            Bitfinex). You can use MayEtherWallet, MetaMask,
                            Mist wallets etc.
                          </p>
                        </div>
                        <div className="note note-plane note-danger">
                          <em className="fas fa-info-circle" />
                          <p>
                            In case you send a different amount, number of
                            Oakins will update accordingly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Pay Confirm End */}
                {/* Modal Pay Failed Start */}
                <div className="modal fade" id="pay-failed" tabIndex={-1}>
                  <div className="modal-dialog modal-dialog-md modal-dialog-centered">
                    <div className="modal-content">
                      <div className="popup-body text-center">
                        <div className="gaps-2x" />
                        <div className="pay-status pay-status-error">
                          <em className="ti ti-alert" />
                        </div>
                        <div className="gaps-2x" />
                        <h3>Oops! Payment failed!</h3>
                        <p>
                          Sorry, seems there is an issues occurred and we
                          couldn’t process your payment. If you continue to have
                          issues, please contact us with order no.
                          <strong>TNX94KR8N0</strong>.
                        </p>
                        <div className="gaps-2x" />
                        <a
                          href="#"
                          data-dismiss="modal"
                          data-toggle="modal"
                          data-target="#get-pay-address"
                          className="btn btn-primary"
                        >
                          Try to Pay Again
                        </a>
                        <div className="gaps-1x" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Pay Failed End */}
                {/* Modal Pay Thanks Start */}
                <div className="modal fade" id="pay-thanks" tabIndex={-1}>
                  <div className="modal-dialog modal-dialog-md modal-dialog-centered">
                    <div className="modal-content">
                      <div className="popup-body text-center">
                        <div className="gaps-2x" />
                        <div className="pay-status pay-status-success">
                          <em className="ti ti-check" />
                        </div>
                        <div className="gaps-2x" />
                        <h3>Thanks for your contribution!</h3>
                        <p>
                          Your payment amount <strong>1.0 ETH</strong> has been
                          successfully received againest order no.{' '}
                          <strong>TNX94KR8N0</strong>. We’ve added{' '}
                          <strong className="text-cyan">18,750 Oakin</strong>{' '}
                          tokens in account.
                        </p>
                        <div className="gaps-2x" />
                        <a href="#" className="btn btn-primary">
                          See Token Balance
                        </a>
                        <div className="gaps-1x" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal Pay Thanks End */}
              </div>
              {/* Buy Token Area */}
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
                    <div className="copyright-text">© 2022 Oakin Hill.</div>
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
