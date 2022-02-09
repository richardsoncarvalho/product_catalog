import React from 'react';
import ReactDOM from 'react-dom';

import Reset from './styles/reset';

import { Provider } from './providers/theme';
import { Routes } from './routes';
import { CacheProvider } from './providers/cache';
import { CartProvider } from './providers/cart';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <CacheProvider>
        <CartProvider>
          <>
            <Reset />
            <Routes />
          </>
        </CartProvider>
      </CacheProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
