import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import Reset from './styles/reset';
import { Provider } from './providers/theme';
import { Routes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Reset />
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
