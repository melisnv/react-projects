import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './Main/context';
import { SearchProvider } from './SearchMenu/contextSearch';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
