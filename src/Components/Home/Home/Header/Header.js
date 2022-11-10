import React from 'react';
import {signOut} from 'firebase/auth';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Header = () => {

  const [user, loading, error] = useAuthState(auth);
  const logout = () =>{
    signOut(auth);
  }

    const menuItems = <>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/">Dashboard</Link></li>
    <li><Link to="/rent">Rent</Link></li>
    <li><Link to="/sell">Sell</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li>{user ? <button className="menu menu-horizontal text-amber-400 font-bold font-mono text-xl p-3" onClick={logout} >Sign Out</button>  : <Link to="/signIn">Sign In</Link>}</li>
    </>
    return (
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-amber-400 font-bold font-mono text-xl">
        {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-amber-800 text-2xl font-extrabold"><GoHome></GoHome>FiNd HOmE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-amber-400 font-bold font-mono text-xl p-0">
      {menuItems}
    </ul>
  </div>
</div>
    
    );
};

export default Header;

    