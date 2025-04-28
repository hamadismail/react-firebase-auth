import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
  return (
    <div className="card bg-base-100 mt-8 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover"></a>
          </div>
          <button className="btn btn-neutral mt-4">Registration</button>
        </form>
        <p>
          ALready have an account?{' '}
          <Link className="text-blue-500 underline" to="/signin">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
