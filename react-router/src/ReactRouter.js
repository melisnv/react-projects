import React from 'react';
// react router
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Error from './Error';
import Navbar from './Navbar';
import People from './People';
import Person from './Person';

const ReactRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="person/:id" element={<Person />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Error />
    </Router>
  );
};

export default ReactRouter;
