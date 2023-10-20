import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
// const [userEmail, setUserEmail] = useState({});

// register user
const createAccount = (email, password)=> {
 return createUserWithEmailAndPassword(auth, email, password);
}

// sign in user
const logIn = (email, password)=> {
    return signInWithEmailAndPassword(auth, email, password);
}

// Sign In with social
const socialSignIn = (provider)=> {
    return signInWithPopup(auth, provider);
}

// Manage users
useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser=> {
        setUser(currentUser);
    })
    return ()=> {
        unSubscribe();
    }
},[])

// Sign Out the users
const logOut = ()=> {
    return signOut(auth);
}

const authInfo = {
    user,
    createAccount,
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