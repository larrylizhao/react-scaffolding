import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '@Redux/store';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  setupListeners(store.dispatch);
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
