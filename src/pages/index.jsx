import AllRoutes from 'constants/routes';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth } from 'requests';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/actions/userAction';
import Home from './home';
export default function Pages() {
  const [access, setAccess] = useState(false);
  const token = useSelector((state) => state.user.token);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

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
  useEffect(() => {
    getUser();
  }, [token]);
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Routes>
      {AllRoutes.map((route, index) => (
        <Route
          element={route.protected && !access ? <Home /> : <route.component />}
          key={index}
          exact={route.exact}
          path={route.path}
        />
      ))}
    </Routes>
  );
}
