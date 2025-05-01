import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const Leastestnews = () => {
    return (
        <div className='flex items-center bg-base-200 p-1.5 my-2.5'>
            <p className='bg-red-700 text-white rounded-sm p-1'> Leatest</p>
            <Marquee pauseOnHover className='space-x-10'>
                <Link to={'/news'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quasi corrupti vel?

                </Link>
                <Link to={'/news'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quasi corrupti vel?

                </Link>
                <Link to={'/news'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quasi corrupti vel?

                </Link>
                <Link to={'/news'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quasi corrupti vel?

                </Link>
            </Marquee>
        </div>
    );
};

export default Leastestnews;