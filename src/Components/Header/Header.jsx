import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="logo-conatiner">
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h1 className='text-gray-500'>Journalism without fear or favor with </h1>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm ")}</p>
        </div>
    );
};

export default Header;