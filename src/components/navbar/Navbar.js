import React from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './Navbar.css';
const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
      signOut(auth);
      localStorage.removeItem('accessToken');
      navigate('/login');
    };
    
  return (
    <div>
       <div class="navbar">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">
      <img src='https://image.shutterstock.com/image-vector/ninja-bank-logo-icon-260nw-1743035090.jpg' className='w-12'></img>
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Digital Banking</Link></li>
      <li tabIndex={0}>
        <a>
          Features
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li className='text-black'><a>About Us</a></li>
          <li className='text-black'><a>Careers</a></li>
          <li className='text-black'><a>History</a></li>
          <li className='text-black'><a>Events</a></li>
        </ul>
      </li>
      <li tabIndex={0}>
        <a>
          Services
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li className='text-black'><a>Accounts</a></li>
          <li className='text-black'><a>Cards</a></li>
          <li className='text-black'><a>Loans</a></li>
          <li className='text-black'><a>Payments</a></li>
          <li className='text-black'><a>Investment</a></li>
          <li className='text-black'><a>Insurance</a></li>
        </ul>
      </li>
      <li><Link to="/blogs">News</Link></li>
      <li><Link to="/blogs">Gallary</Link></li>
      <li><Link to="/contact">Get in touch</Link></li>
      
   
    
    </ul>
  </div>
  <div class="navbar-end">
  <Link className='mr-20 ' to="/dashboard">Dashboard</Link>
  {
    user ? 
    <button className="btn btn-banner"  onClick={logout} >Sign Out</button>
    :
    <Link to="/login" className='btn btn-banner  text-white'>Login</Link>
  }
  </div>
</div>
    </div>
  )
}
export default Navbar;
