import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { Navigate } from 'react-router';
import Loading from '../Components/Loading/Loading';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user.email) {
        return children;
    }
    return <Navigate to={'/Auth/login'}></Navigate>


};

export default PrivateRoute;