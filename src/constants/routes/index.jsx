import Home from 'pages/home';
import Login from 'pages/login';
import LoginSuccess from 'pages/login-success';
import Register from 'pages/register';
import Verify from 'pages/verify';
import RegisterSuccess from 'pages/register-success';
import Reset from 'pages/reset';
import ChangePassword from 'pages/change-password';
import ChangePasswordSuccess from 'pages/change-password-success';
import Dashboard from 'pages/dashboard';
import BuyToken from 'pages/buy-token';
import DepositAddresses from 'pages/deposit-addresses';
import IcoDistrubution from 'pages/ico-distribution';
import Wallet from 'pages/wallet';
import Profile from 'pages/profile';
const AllRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
    protected: false,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
    protected: true,
  },
  {
    path: '/buy-token',
    component: BuyToken,
    exact: true,
    protected: true,
  },
  {
    path: '/deposit',
    component: DepositAddresses,
    exact: true,
    protected: true,
  },
  {
    path: '/ico-distribution',
    component: IcoDistrubution,
    exact: true,
    protected: true,
  },
  {
    path: '/wallet',
    component: Wallet,
    exact: true,
    protected: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
    protected: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    protected: false,
  },
  // {
  //   path: '/login-verify',
  //   component: LoginVerify,
  //   exact: true,
  //   protected: false,
  // },
  {
    path: '/login-success',
    component: LoginSuccess,
    exact: true,
    protected: false,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
    protected: false,
  },
  {
    path: '/verify/:type',
    component: Verify,
    exact: true,
    protected: false,
  },
  {
    path: '/register-success',
    component: RegisterSuccess,
    exact: false,
    protected: false,
  },
  {
    path: '/reset',
    component: Reset,
    exact: true,
    protected: false,
  },
  {
    path: '/change-password',
    component: ChangePassword,
    exact: false,
    protected: false,
  },
  {
    path: '/change-password-success',
    component: ChangePasswordSuccess,
    exact: true,
    protected: false,
  },
];
export default AllRoutes;
