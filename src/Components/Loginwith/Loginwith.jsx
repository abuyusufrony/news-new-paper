import React from 'react';
import { FaGit, FaGoogle } from "react-icons/fa";


const Loginwith = () => {
    return (
        <div>
            <h2 className='font-semibold'>login With</h2>

            <div className=' w-full space-y-2.5'>
                <button className='btn'> <FaGoogle></FaGoogle> login With Facebook  </button>
                <button className='btn'> <FaGit></FaGit> login With Facebook  </button>
            </div>
        </div>
    );
};

export default Loginwith;