import React from 'react';
import Login from '@Pages/Login';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@Utils/test-utils';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => () => {}),
  useLocation: jest
    .fn()
    .mockReturnValue({ state: { form: { pathname: '/dashboard' } } })
}));

describe('Login', () => {
  it('should render Login page correctly', () => {
    // Since we're using redux inside the Login component we need to render it with Provider to provide the store
    renderWithProviders(<Login />);
    expect(screen.getByRole('button', { name: /login/i })).toBeVisible();
  });

  it('should log the user in', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Login />);
    await user.type(
      screen.getByRole('textbox', { name: /username/i }),
      'testing'
    );
    await user.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByRole('button', { name: /login/i })).toBeVisible();
  });
});
