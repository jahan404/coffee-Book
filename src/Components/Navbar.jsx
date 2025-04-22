import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar shadow-sm sticky top-0 z-50 bg-white/30 backdrop-blur-2xl">

  <div className="navbar-start pl-7">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      
    </div>
    <a className="btn btn-ghost text-3xl">Coffee-Book</a>
  </div>
  
  <div className="navbar-end pr-12 gap-5">
    <Link to="/" className="">Home</Link>
    <Link to="/menu"  className="">Menu</Link>
    <Link to="/favs" className="">Favs</Link>
  </div>
</div>
    );
};

export default Navbar;