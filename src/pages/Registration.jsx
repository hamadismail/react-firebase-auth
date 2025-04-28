import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import PasswordIcon from '../components/ui/PasswordIcon';
import EmailIcon from '../components/ui/EmailIcon';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthContext';
import { sendEmailVerification } from 'firebase/auth';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegistration = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(result => {
        console.log(result);
        sendEmailVerification(result.user).then(() => {
          alert('Verification Email Sent. Please Check Your Inbox');
          return signOut(auth);
        });
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="card bg-base-100 mt-8 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegistration} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <label className="input validator">
            <EmailIcon />
            <input
              type="email"
              name="email"
              placeholder="mail@site.com"
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <label className="label">Password</label>
          <label className="input validator">
            <PasswordIcon />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />

            <button
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
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
