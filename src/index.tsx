import React from 'react';
import ReactDOM from 'react-dom';

import Reset from './styles/reset';
import { Provider } from './providers/theme';
import { Routes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <>
        <Reset />
        <Routes />
      </>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
