import React, { type ReactElement } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppRoute from './router/routes';
import { store } from '@Redux/store';

const App = (): ReactElement => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <AppRoute />
        </HashRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
