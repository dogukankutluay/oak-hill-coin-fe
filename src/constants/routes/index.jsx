import Home from 'pages/home';
import Login from 'pages/login';
import LoginVerify from 'pages/login-verify';
import LoginSuccess from 'pages/login-success';
import Register from 'pages/register';
import Verify from 'pages/verify';
import RegisterSuccess from 'pages/register-success';
import Reset from 'pages/reset';
import ChangePassword from 'pages/change-password';
import ChangePasswordSuccess from 'pages/change-password-success';
const AllRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
    protected: false,
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
    exact: true,
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
    exact: true,
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
