import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { auth } from 'src/config/firebaseConfig';
import { useState } from 'react';

export const useFirebaseAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const loginByGoogle = () => {
    const provider = new GoogleAuthProvider();
    setAuthError('');
    try {
      signInWithRedirect(auth, provider);
    } catch (error: any) {
      setAuthError(error.message);
    }
  };

  const loginWithEmailAndPassword = async () => {
    setAuthError('');
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setAuthError(error.message);
      setEmail('');
      setPassword('');
    }
  };

  const logout = async () => {
    setAuthError('');
    try {
      signOut(auth);
    } catch (error: any) {
      setAuthError(error.message);
    }
  };

  const getCurrentUser = () => auth.currentUser;

  return {
    email,
    setEmail,
    password,
    setPassword,
    authError,
    setAuthError,
    loginByGoogle,
    loginWithEmailAndPassword,
    logout,
    getCurrentUser,
  };
};
