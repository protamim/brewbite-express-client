import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

// register user
const createAccount = (email, password)=> {
    setLoading(true);
 return createUserWithEmailAndPassword(auth, email, password);
}

// sign in user
const logIn = (email, password)=> {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

// Sign In with social
const socialSignIn = (provider)=> {
    setLoading(true);
    return signInWithPopup(auth, provider);
}

// Manage users
useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser=> {
        setUser(currentUser);
        setLoading(false);
    })
    return ()=> {
        unSubscribe();
    }
},[])

// Update user profile info
const userProfile = (userInfo)=> {
    setLoading(true);
   return updateProfile(auth.currentUser, userInfo)
}

// Sign Out the users
const logOut = ()=> {
    setLoading(true);
    return signOut(auth);
}

const authInfo = {
    user,
    loading,
    createAccount,
    userProfile,
    logIn,
    socialSignIn,
    logOut
}


return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;