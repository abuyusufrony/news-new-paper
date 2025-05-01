import React from 'react';
import Loginwith from '../Loginwith/Loginwith';
import Findus from '../Findus/Findus';

const Rightnav = () => {
    return (
        <div className='space-y-5'>
            <Loginwith></Loginwith>
            <Findus></Findus>
        </div>
    );
};

export default Rightnav;