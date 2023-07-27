import React, { type ReactElement } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppRoute from './router/routes';
import { store } from './redux/store';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppRoute />
      </HashRouter>
    </Provider>
  );
};

export default App;
