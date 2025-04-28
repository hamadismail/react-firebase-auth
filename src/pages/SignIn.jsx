import React from 'react';
import { Link } from 'react-router';

const SignIn = () => {
  return (
    <div className="card bg-base-100 mt-8 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          Didn't have an account?{' '}
          <Link className="text-blue-500 underline" to="/registration">
            Registration
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
