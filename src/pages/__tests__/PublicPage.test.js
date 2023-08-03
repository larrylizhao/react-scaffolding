import React from 'react';
import PublicPage from '@Pages/PublicPage';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@Utils/tests/test-utils';

describe('PublicPage', () => {
  it('should render PublicPage correctly', () => {
    renderWithProviders(<PublicPage />);
    expect(screen.getByText(/Public/i)).toBeVisible();
  });
});
