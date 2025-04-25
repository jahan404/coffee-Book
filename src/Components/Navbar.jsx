import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar shadow-sm sticky top-0 z-50 bg-white/30 backdrop-blur-2xl">

  <div className="navbar-start pl-7">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to="/"  className={({isActive})=>`${isActive ? 'text-warning' : 'text-black'}`}>Home</NavLink>
        <NavLink to="/menu"  className={({isActive})=>`${isActive ? 'text-warning' : 'text-black'}`}>Menu</NavLink>
        <NavLink to="/favs" className={({isActive})=>`${isActive ? 'text-warning' : 'text-black'}`}>Favs</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl">Coffee-Book</a>
  </div>
  
  <div className="navbar-end hidden lg:flex pr-12 gap-5">
    <NavLink to="/"  className={({isActive})=>`${isActive ? 'text-warning' : 'text-black'}`}>Home</NavLink>
    <NavLink to="/menu"  className={({isActive})=>`${isActive ? 'text-warning' : 'text-black'}`}>Menu</NavLink>
    <NavLink to="/favs" className={({isActive})=>`${isActive ? 'text-warning' : 'text-black'}`}>Favs</NavLink>
  </div>
</div>
    );
};

export default Navbar;