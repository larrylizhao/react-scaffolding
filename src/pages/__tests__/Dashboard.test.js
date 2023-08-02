import React from 'react';
import Dashboard from '@Pages/Dashboard';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@Utils/test-utils';

describe('Dashboard', () => {
  it('should render Dashboard correctly', () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText(/Dashboard/i)).toBeVisible();
  });
});
