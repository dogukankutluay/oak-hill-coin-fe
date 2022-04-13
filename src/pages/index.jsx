import AllRoutes from 'constants/routes';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Pages() {
  return (
    <Routes>
      {AllRoutes.map((route, index) => (
        <Route
          element={<route.component />}
          key={index}
          exact={route.exact}
          path={route.path}
        />
      ))}
    </Routes>
  );
}
