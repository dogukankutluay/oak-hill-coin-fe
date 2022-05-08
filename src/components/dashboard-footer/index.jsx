import React from 'react';

export default function DashboardFooter() {
  return (
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
            <div className="copyright-text">© 2022 OAKC</div>
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
  );
}
