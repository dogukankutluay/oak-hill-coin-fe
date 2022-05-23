import AllRoutes from 'constants/routes';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth, deposit } from 'requests';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/actions/userAction';
import Home from './home';

export default function Pages() {
  const [access, setAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const getUser = async () => {
    try {
      const { data } = await auth.getProfile({
        headers: { authorization: `Bearer ${token}` },
      });
      if (data.success) {
        dispatch(login({ token, userInfo: data.user }));
        return setAccess(true);
      }
      setAccess(false);
    } catch (error) {
      setAccess(false);
    } finally {
      setLoading(false);
    }
  };

  const checkDeposit = async () => {
    const { data } = await deposit.checkDeposit({
      headers: { authorization: `Bearer ${token}` },
    });
  };
  useEffect(() => {
    if (!token) return setLoading(false);

    getUser();
  }, [token]);

  useEffect(() => {
    const interval = setInterval(checkDeposit, 5000);
    return () => clearInterval(interval);
  }, []);
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Routes>
      {AllRoutes.map((route, index) => (
        <Route
          element={
            route.protected && !access ? (
              <Navigate to={'/'} replace />
            ) : (
              <route.component />
            )
          }
          key={index}
          exact={route.exact}
          path={route.path}
        />
      ))}
    </Routes>
  );
}
