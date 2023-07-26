import React, { type ReactElement } from 'react';
import AppRoute from './router/routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
