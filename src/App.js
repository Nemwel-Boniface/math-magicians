import React from 'react';
import { Routes, Route } from "react-router-dom";
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path='/calculator' element={<Calculator />} />
      <Route exact path='/quote' element={<Quote />} />
    </Routes>
  </div>
);

export default App;
