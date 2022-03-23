import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/calculator" element={<Calculator />} />
      <Route exact path="/quote" element={<Quote />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
