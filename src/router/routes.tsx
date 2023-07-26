import React, { type ReactElement } from 'react';
import PageLayout from '@Components/common/Layouts/PageLayout';

import { Routes, Route } from 'react-router-dom';
import AuthWrapper from './AuthWrapper';
import PublicPage from '@Components/pages/PublicPage';
import LoginPage from '@Components/pages/Login';
import ProtectedPage from '@Components/pages/ProtectedPage';
import Dashboard from '@Components/pages/Dashboard';

const AppRoute = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<PublicPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="/protected"
          element={
            <AuthWrapper>
              <ProtectedPage />
            </AuthWrapper>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoute;
