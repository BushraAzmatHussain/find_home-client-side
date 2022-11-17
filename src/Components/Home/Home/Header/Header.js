import React from 'react';
import {signOut} from 'firebase/auth';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import './Header.css';

const Header = () => {

  const [user, loading, error] = useAuthState(auth);
  const logout = () =>{
    signOut(auth);
  }
    return (


      <div className="navbar bg-base-100 pl-8 pr-16">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/home"  className='text-amber-400 font-bold font-mono text-xl'>Home</Link></li>
        <li tabIndex={0}>
          <Link to='/' className="justify-between text-amber-400 font-bold font-mono text-xl">
            Explore
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2 bg-base-100">
          <li><Link to="/rent" className='text-amber-400 font-bold font-mono text-xl'>Rent</Link></li>
          <li><Link to="/sell" className='text-amber-400 font-bold font-mono text-xl'>Sell</Link></li>
          </ul>
        </li>
        <li><Link to="/dashboard" className='text-amber-400 font-bold font-mono text-xl'>Dashboard</Link></li>
        <li><Link to="/contact" className='text-amber-400 font-bold font-mono text-xl'>Contact</Link></li>
        <li>{user ? <button className="menu menu-horizontal text-amber-400 font-bold font-mono text-xl p-3" onClick={logout} >Sign Out</button>  : <Link to="/signIn" className='text-amber-400 font-bold font-mono text-xl'>Sign In</Link>}</li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-amber-800 text-2xl font-extrabold"><GoHome></GoHome>FiNd HOmE</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'  className='text-amber-400 font-bold font-mono text-xl'>Home</Link></li>
      <li tabIndex={0}>
        <Link to="/" className='text-amber-400 font-bold font-mono text-xl'>
          Explore
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="pl-1 pr-10 bg-base-100">
        <li><Link to="/rent" className='text-amber-400 font-bold font-mono text-xl'>Rent</Link></li>
          <li><Link to="/sell" className='text-amber-400 font-bold font-mono text-xl'>Sell</Link></li>
        </ul>
      </li>
      <li><Link to="/dashboard" className='text-amber-400 font-bold font-mono text-xl'>Dashboard</Link></li>
        <li><Link to="/contact" className='text-amber-400 font-bold font-mono text-xl'>Contact</Link></li>
        <li>{user ? <button className="menu menu-horizontal text-amber-400 font-bold font-mono text-xl p-3" onClick={logout} >Sign Out</button>  : <Link className=' text-amber-400 font-bold font-mono text-xl pr-4 pl-4' to="/signIn">Sign In</Link>}</li>
      
    </ul>
  </div>
</div>



//             <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <label tabIndex="0" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </label>
//       <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-amber-400 font-bold font-mono text-xl">
//         {menuItems}
//       </ul>
//     </div>
//     <a className="btn btn-ghost normal-case text-amber-800 text-2xl font-extrabold"><GoHome></GoHome>FiNd HOmE</Link>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal text-amber-400 font-bold font-mono text-xl p-0">
//       {menuItems}
//     </ul>
//   </div>
// </div>
    
    );
};

export default Header;

    