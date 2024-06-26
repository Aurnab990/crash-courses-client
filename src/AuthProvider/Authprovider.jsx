import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user, setUser] = useState([""]);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        return signOut(auth);
      };

      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser);
            setUser(currentUser);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    };

    const authInfo = {
        user,
        createUser,
        googleLogin,
        signIn,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Authprovider;