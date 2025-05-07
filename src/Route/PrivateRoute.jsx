import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading/Loading';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const loaction = useLocation()
    console.log(loaction)
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user.email) {
        return children;
    }
    return <Navigate state={loaction.pathname} to={'/Auth/login'}></Navigate>


};

export default PrivateRoute;