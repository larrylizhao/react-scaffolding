import React from 'react';
import ProtectedPage from '@Pages/ProtectedPage';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@Utils/test-utils';

describe('ProtectedPage', () => {
  it('should render ProtectedPage correctly', () => {
    renderWithProviders(<ProtectedPage />);
    expect(screen.getByText(/Protected Page/i)).toBeVisible();
  });
});
