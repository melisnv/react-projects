import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Tours from './components/pages/Tours';
import SignUp from './components/pages/SignUp';
import Sightseeing from './components/pages/Sightseeing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tours" exact element={<Tours />} />
          <Route path="/sightseeing" exact element={<Sightseeing />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
