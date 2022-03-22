import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navBar">
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li className="bar"><Link to="/">Home</Link></li>
        <li className="bar"><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
