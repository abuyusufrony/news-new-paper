import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { Navigate } from 'react-router';


const PrivateRoute = ({ children }) => {
    const { user } = useContext(Authcontext)
    if (user && user.email) {
        return children;
    }
    return <Navigate to={'/Auth/login'}></Navigate>


};

export default PrivateRoute;