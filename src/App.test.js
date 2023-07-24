import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App num={2} />);
    const heading = screen.getByText(/Total Number: 2/i);
    expect(heading).toBeInTheDocument();
  });
});
