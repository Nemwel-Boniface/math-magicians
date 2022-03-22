import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navBar'>
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <li className='bar'><a href='#'>Home</a></li>
          <li className='bar'><a href='#'>Calculator</a></li>
          <li><a href='#'>Quote</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;