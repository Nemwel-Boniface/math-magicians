import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Calculator.css';
import './Navbar.css';
import './Home.css';
import './Footer.css';
import './Quote.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
