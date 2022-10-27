import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState('')
  const [ loading, setLoading ] = useState(true)

  // sign in with google 
  const providerGoogleLogIn = (provider) => {
    setLoading(true)
    return signInWithPopup(auth,provider)
  }

  // sign in new user 
  const googleSignIn = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signInExistingUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  // logOut 

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  // update user profile 
  const updateUserProfile = (profile) => {
    setLoading(true)
    return updateProfile(auth.currentUser,profile)
  }
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
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
    signInExistingUser,
    logOut,
    loading,
    updateUserProfile
  }

  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;