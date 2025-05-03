import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Nav/Nav';

const Auth = () => {
    return (
        <div>
            <header className='p-3'>
                <Nav></Nav>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;