import React, { useEffect, useState } from 'react';

const Leftnav = () => {
    const [catagorey, setcatagorey] = useState([])
    useEffect(() => {
        fetch('/categories.json')
            .then((res) => res.json())
            .then((data) => setcatagorey(data))
            .catch((err) => console.log('err', err))
    }, [])

    return (
        <div className=''>

            <h2 className='font-sans font-semibold mb-1.5clear'>All Catagorey are :{catagorey.length}</h2>

            <div className='flex flex-col gap-2'>
                {
                    catagorey.map(cata => <button className='btn'> {cata.name} </button>)
                }
            </div>

        </div>
    );
};

export default Leftnav;