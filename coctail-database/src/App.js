import React from 'react';
// import components
import Navbar from './components/Navbar';
// import pages
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
