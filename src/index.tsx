import React from 'react';
import ReactDOM from 'react-dom';

import Reset from './styles/reset';

import { Provider } from './providers/theme';
import { ProductProvider } from './providers/products';
import { Routes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <ProductProvider>
        <>
          <Reset />
          <Routes />
        </>
      </ProductProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
