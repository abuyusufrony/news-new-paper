import React from 'react';
import { Outlet } from 'react-router';
import ReadMore from '../ReadMore/ReadMore';

const Mainnav = () => {
    return (
        <div>
            <Outlet></Outlet>

        </div>
    );
};

export default Mainnav;