import React from 'react';
import { Link } from 'react-router';
import PasswordIcon from '../components/ui/PasswordIcon';
import EmailIcon from '../components/ui/EmailIcon';

const Registration = () => {
  return (
    <div className="card bg-base-100 mt-8 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <label className="input validator">
            <EmailIcon />
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <label className="label">Password</label>
          <label className="input validator">
            <PasswordIcon />
            <input
              type="password"
              required
              placeholder="Password"
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
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
