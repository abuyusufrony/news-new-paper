import React from 'react';
import { Outlet } from 'react-router';

const Mainnav = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainnav;