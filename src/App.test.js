import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App tests', () => {
  it('should render dashboard', () => {
    render(<App />);
    const content = screen.getByText(/dashboard/i);
    expect(content).toBeInTheDocument();
  });
});
