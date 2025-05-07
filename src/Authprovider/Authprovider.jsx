import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.int';

export const Authcontext = createContext()
const Authprovider = ({ children }) => {
    const [user, setuser] = useState([])
    const [loading, setloading] = useState(true)
    console.log(user, loading)

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentuser => {
            console.log('user are login', currentuser)
            setuser(currentuser)
            setloading(false)


        })
        return () => {
            unsuscribe;
        }

    }, [])

    const logout = () => {

        return signOut(auth);
    }
    const loginUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateuser = (update) => {
        return updateProfile(auth.currentUser, update)
    }
    const userinfo = {
        createuser,
        user, setuser, logout, loginUser, loading, updateuser,

    }


    return (

        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>

    );
};

export default Authprovider;