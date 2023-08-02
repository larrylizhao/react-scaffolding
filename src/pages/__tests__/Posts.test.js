import Dashboard from '@Pages/Dashboard';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Dashboard', () => {
  it('should render Dashboard correctly', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Dashboard/i)).toBeVisible();
  });
});
