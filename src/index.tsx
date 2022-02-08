import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './providers/theme';

import App from './App';
import Reset from './styles/reset';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <>
        <Reset />
        <App />
      </>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
