import axios from 'axios';
import { API_CONFIG } from 'constants/api';

export const auth = {
  login: (payload) => axios({ ...API_CONFIG.auth.login, data: payload }),
  register: (payload) => axios({ ...API_CONFIG.auth.register, data: payload }),
  getProfile: (payload) => axios({ ...API_CONFIG.auth.getProfile, ...payload }),
  confirmRegister: ({ code, phone }) =>
    axios({
      ...API_CONFIG.auth.confirmRegister,
      params: { code, phone },
    }),
  confirmEmail: (payload) =>
    axios({
      ...API_CONFIG.auth.confirmEmail,
      ...payload,
    }),
  forgotPassword: (payload) =>
    axios({ ...API_CONFIG.auth.forgotPassword, params: { ...payload } }),
  changePassword: (payload) =>
    axios({ ...API_CONFIG.auth.changePassword, ...payload }),
  resetPassword: (payload) =>
    axios({ ...API_CONFIG.auth.resetPassword, ...payload }),
  emailSendAgain: (payload) =>
    axios({ ...API_CONFIG.auth.emailSendAgain, ...payload }),
};

export const deposit = {
  createDeposit: (payload) =>
    axios({ ...API_CONFIG.deposit.createDeposit, ...payload }),
  getDeposit: (payload) =>
    axios({ ...API_CONFIG.deposit.getDeposit, ...payload }),
  getDepositLog: (payload) =>
    axios({ ...API_CONFIG.deposit.getDepositLog, ...payload }),
  buyDeposit: (payload) =>
    axios({ ...API_CONFIG.deposit.buyDeposit, ...payload }),
  checkDeposit: (payload) =>
    axios({ ...API_CONFIG.deposit.checkDeposit, ...payload }),
};
export const payment = {
  getPayment: (payload) =>
    axios({ ...API_CONFIG.payment.getPayment, ...payload }),
};
