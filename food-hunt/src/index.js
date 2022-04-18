import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './Main/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SearchProvider } from './SearchMenu/contextSearch';
import SingleMeal from './SearchMenu/pages/SingleMeal';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <SearchProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/meal/:id" component={SingleMeal} />
          </Switch>
        </Router>
      </SearchProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
