export const BASE_URL = 'https://life.kafpay.com/api/v1/';
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
    forgotPassword: {
      url: `${BASE_URL}auth/forgotPassword`,
      method: METHODS.GET,
    },
    confirmForgotPassword: {
      url: `${BASE_URL}auth/confirmForgotPassword`,
      method: METHODS.GET,
    },
    changePassword: {
      url: `${BASE_URL}auth/changePassword`,
      method: METHODS.POST,
    },
  },
};
