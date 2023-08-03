import React from 'react';
import Posts from '@Pages/Posts';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@Utils/tests/test-utils';
import { act } from 'react-dom/test-utils';

describe('Posts', () => {
  it('should render Posts correctly', async () => {
    await act(async () => {
      renderWithProviders(<Posts />);
    });

    expect(screen.getByText(/Loading/i)).toBeVisible();
  });
});
