import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Performance from './Performance';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/performance" component={Performance} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
