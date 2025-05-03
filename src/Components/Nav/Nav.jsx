
import React from 'react';
import { Link } from 'react-router';
import user from '../../assets/user.png'


const Nav = () => {
    return (
        <div className='flex justify-between items-center p-2.5 bg-slate-100'>
            <div className=""></div>
            <div className='space-x-2.5'>

                <Link to={'/'}>Home</Link>
                <Link>About</Link>
                <Link>Carieer</Link>

            </div>
            <div className='flex gap-2.5 items-center'>
                <div> <Link to={'/Auth/login'}>Login</Link ></div>
                <div><img src={user} alt="" /></div>


            </div>


        </div>
    );
};

export default Nav;