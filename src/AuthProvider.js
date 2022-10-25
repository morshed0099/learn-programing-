import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githuProvider = new GithubAuthProvider();

export const userAuth = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const createUserEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const logInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logoutEmail = () => {
        return signOut(auth)
    }
    const createUserGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const createUserGithub = () => {
        return signInWithPopup(auth, githuProvider);
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubcribe();

    }, [])
    // const user={displayName:""}
    const userInfo = {
        user,
        createUserEmail,
        logInWithEmail,
        logoutEmail,
        createUserGoogle,
        createUserGithub,
        resetPassword,
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