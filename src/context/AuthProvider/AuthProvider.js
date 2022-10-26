import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState('')

  // sign in with google 
  const providerGoogleLogIn = (provider) => {
    return signInWithPopup(auth,provider)
  }

  // sign in new user 
  const googleSignIn = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signInExistingUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })

    return ()=>{
      unsubscribe()
    }
  },[])

  const authInfo = 
  { 
    user,
    providerGoogleLogIn,
    googleSignIn,
    signInExistingUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;