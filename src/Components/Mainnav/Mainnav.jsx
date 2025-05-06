import React from 'react';
import { Outlet } from 'react-router';
import ReadMore from '../ReadMore/ReadMore';

const Mainnav = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ReadMore></ReadMore>
        </div>
    );
};

export default Mainnav;