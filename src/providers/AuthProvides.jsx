import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvides = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then(
      result => {
        sendEmailVerification(result.user)
          .then(() => {
            alert('Verification Email Sent. Please Check Your Inbox');
          })
          .catch(error => alert('Verification Error', error));
      }
    );
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        if (!result.user.emailVerified) {
          alert('please verify your email address');
          signOut(auth);
          throw new Error('Email not verified');
        }
      })
      .catch(error => console.log(error));
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscriber();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleSignIn,
    signOutUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvides;
