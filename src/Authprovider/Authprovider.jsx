import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, use, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.int';

export const Authcontext = createContext()
const Authprovider = ({ children }) => {
    const [user, setuser] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser)
            setloading(false)


        })
        return () => {
            unsuscribe;
        }

    }, [])


    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userinfo = {
        createuser,
        user, loading,

    }

    return (

        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>

    );
};

export default Authprovider;