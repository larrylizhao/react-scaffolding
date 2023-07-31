import React from 'react';
import { Provider } from 'react-redux';
import AppRoute from './router/routes';
import { store } from '@Redux/store';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
