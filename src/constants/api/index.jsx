export const BASE_URL = 'http://localhost:8080/api/v1/';
const METHODS = {
  GET: 'GET',
  POST: 'POST',
  CREATE: 'CREATE',
};
export const API_CONFIG = {
  auth: {
    login: { url: `${BASE_URL}auth/login`, method: METHODS.POST },
    register: { url: `${BASE_URL}auth/register`, method: METHODS.POST },
    confirmRegister: {
      url: `${BASE_URL}auth/confirmRegister`,
      method: METHODS.GET,
    },
    getProfile: { url: `${BASE_URL}auth/getProfile`, method: METHODS.GET },
    forgotPassword: {
      url: `${BASE_URL}auth/forgotPassword`,
      method: METHODS.GET,
    },
    confirmForgotPassword: {
      url: `${BASE_URL}auth/confirmForgotPassword`,
      method: METHODS.GET,
    },
    confirmEmail: {
      url: `${BASE_URL}auth/confirmEmail`,
      method: METHODS.GET,
    },
    resetPassword: {
      url: `${BASE_URL}auth/resetPassword`,
      method: METHODS.POST,
    },
  },
  deposit: {
    createDeposit: { url: `${BASE_URL}deposit`, method: METHODS.POST },
    getDeposit: { url: `${BASE_URL}deposit`, method: METHODS.GET },
    getDepositLog: { url: `${BASE_URL}deposit/log`, method: METHODS.GET },
    buyDeposit: { url: `${BASE_URL}deposit`, method: METHODS.PUT },
    checkDeposit: {
      url: `${BASE_URL}deposit/check/address`,
      method: METHODS.GET,
    },
  },
};
