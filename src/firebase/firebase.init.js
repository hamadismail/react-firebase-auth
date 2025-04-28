// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDkt9TITaY86RZLfdCFVvds0_uNxYRAIxs',
  authDomain: 'react-firebase-auth-73bd7.firebaseapp.com',
  projectId: 'react-firebase-auth-73bd7',
  storageBucket: 'react-firebase-auth-73bd7.firebasestorage.app',
  messagingSenderId: '805736135803',
  appId: '1:805736135803:web:92d75b5f7f216c0dee76de',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
