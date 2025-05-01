import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;