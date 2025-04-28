import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import '../styles/navbar.css';
import { AuthContext } from '../providers/AuthContext';

const Navbar = () => {
  const { signOutUser } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/signin">SignIn</NavLink>
      </li>
      <li>
        <NavLink to="/registration">Registration</NavLink>
      </li>
      <li>
        <NavLink to="/orders">Orders</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(console.log('SignOut Successfully'))
      .catch(error => console.log(error));
  };

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar p-0 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer btn btn-ghost lg:hidden p-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="cursor-pointer text-xl">React Firebase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link onClick={handleSignOut} to="/" className="btn">
            SignOut
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
