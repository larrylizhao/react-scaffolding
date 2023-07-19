import React, { type ReactElement } from 'react';

interface AppProps {
  num: number;
}

const App = ({ num }: AppProps): ReactElement => <h1>Total Number: {num}</h1>;

export default App;
