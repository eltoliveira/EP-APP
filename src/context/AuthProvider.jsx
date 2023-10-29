import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';



export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(getAuth, GoogleAuthProvider);
    setUser(result.user);
    setIsLoggedIn(true);
  } catch (error) {
    console.error('Login with Google error', error);
  }
}

