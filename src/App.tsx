import React, { type ReactElement } from 'react';
import { Provider } from 'react-redux';
import AppRoute from './router/routes';
import { store } from '@Redux/store';

const App = (): ReactElement => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
