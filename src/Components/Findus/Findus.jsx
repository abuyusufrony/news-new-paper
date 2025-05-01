import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const Findus = () => {
    return (
        <div>
            <h2 className='font-semibold mb-2.5'>Find Us </h2>
            <div>
                <div className="join flex   join-vertical ">
                    <button className="btn join-item justify-start "><FaFacebook> </FaFacebook> facebook</button>
                    <button className="btn join-item justify-start ">Button</button>
                    <button className="btn join-item justify-start">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Findus;