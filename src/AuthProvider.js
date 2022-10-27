import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githuProvider = new GithubAuthProvider();

export const userAuth = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loader,setLoader]=useState(true)

    const createUserEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
   

    
    const logInWithEmail = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email,password);
    }
    const logoutEmail = () => {
        setLoader(true)
        return signOut(auth)
    }
    const createUserGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }
    const createUserGithub = () => {
        setLoader(true)
        return signInWithPopup(auth, githuProvider);
    }
    const resetPassword = (email) => {
        setLoader(true)
        return sendPasswordResetEmail(auth, email)
    }
   
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false)
            
        });
        return () => unsubcribe();

    }, [])
  
    // const user={displayName:""}
    const userInfo = {
        user,        
        logInWithEmail,
        logoutEmail,
        createUserGoogle,
        createUserGithub,
        resetPassword,
        createUserEmail,
        loader,
        auth,
    }

    return (
        <div>
            <userAuth.Provider value={userInfo}>
                {children}
            </userAuth.Provider>
        </div>
    );
};

export default AuthProvider;