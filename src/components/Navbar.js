import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div data-testid="Navbar" className="navBar">
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li className="bar"><Link data-testid="home-link" to="/">Home</Link></li>
        <li className="bar"><Link data-testid="calculator-link" to="/calculator">Calculator</Link></li>
        <li><Link data-testid="quote-link" to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
