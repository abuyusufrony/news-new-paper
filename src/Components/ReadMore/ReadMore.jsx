import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const ReadMore = () => {
    const { id } = useParams()
    const array = useLoaderData()
    console.log(array)

    return (
        <div>
            <div>
                <h2>This book id are :</h2>
                <h2>hard work take action{array}  </h2>
            </div>
        </div>
    );
};

export default ReadMore;