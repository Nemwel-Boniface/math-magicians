import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Calculator.css';
import './Navbar.css';
import './Home.css';
import './Footer.css';
import './Quote.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
