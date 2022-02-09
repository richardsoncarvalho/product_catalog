import React from 'react';
import ReactDOM from 'react-dom';

import Reset from './styles/reset';

import { Provider } from './providers/theme';
import { Routes } from './routes';
import { CacheProvider } from './providers/cache';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <CacheProvider>
        <>
          <Reset />
          <Routes />
        </>
      </CacheProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
