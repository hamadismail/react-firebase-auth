import React, { useState } from 'react';
import { Link } from 'react-router';
import GoogleLoginBtn from '../components/ui/GoogleLoginBtn';
import PasswordIcon from '../components/ui/PasswordIcon';
import EmailIcon from '../components/ui/EmailIcon';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = e => {
    e.preventDefault();
  };

  return (
    <div className="card bg-base-100 mt-8 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <label className="relative">
            <EmailIcon className="absolute top-1/2 z-10 -translate-y-1/2 left-2" />
            <input
              type="email"
              className="input pl-8"
              placeholder="Email"
              required
            />
          </label>
          <label className="label">Password</label>
          <label className="relative">
            <PasswordIcon className="absolute top-1/2 z-10 left-2 -translate-y-1/2" />
            <input
              type={showPassword ? 'text' : 'password'}
              className="input pl-8"
              placeholder="Password"
              required
            />
            <button
              className="cursor-pointer z-10 absolute top-1/2 -translate-1/2 right-6 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </label>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <GoogleLoginBtn />
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
